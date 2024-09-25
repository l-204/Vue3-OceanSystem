<template>
    <a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
        :show-upload-list="false" :customRequest="uploadImage" :before-upload="beforeUpload" @change="handleChange">
        <img v-if="imageUrl" class="avatar" :src="imageUrl" alt="avatar" />
        <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">上传图片</div>
        </div>
    </a-upload>
</template>
<script setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { uploadSimpleUrl } from '@/api/upload';
import { useAvatarStore } from '@/stores';
const avatartrStore = useAvatarStore();

const fileList = ref([]);
const loading = ref(false);
const imageUrl = ref('');
const handleChange = async info => {
    if (info.file.status === 'uploading') {
        loading.value = true;
        return;
    }
    if (info.file.status === 'done') {
        loading.value = false;
        message.success('上传成功！');
        // 更新 imageUrl 为返回的 HTTP 图片链接
        imageUrl.value = info.file.response;
    }
    if (info.file.status === 'error') {
        loading.value = false;
        message.error('上传失败！');
    }
};
const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('你只能上传JPEG或PNG格式的图片!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片必须小于2MB!');
    }
    return isJpgOrPng && isLt2M;
};
// 定义 customRequest 函数
const uploadImage = ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append('file', file);

    uploadSimpleUrl(formData)
        .then(response => {
            onSuccess(response, file) // 设置文件状态为 done 并传递 response
            avatartrStore.setAvatar(response) // 保存上传头像链接
        })
        .catch(error => {
            onError(error); // 设置文件状态为 error
        });
};
</script>
<style scoped>
.avatar {
    border-radius: 5px;
    width: 102px;
    height: 102px;
}

.avatar-uploader>.ant-upload {
    width: 128px;
    height: 128px;
}

.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
</style>