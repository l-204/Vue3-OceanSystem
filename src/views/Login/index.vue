<template>
    <div style="display: flex;height:100vh;">
        <div style="width:50%;height:100%;"><img :src="backgroundImage" width="100%" height="100%" /></div>
        <div style="flex-grow:1;margin:auto 40px;">
            <a-form v-show="mode == 'login'" :model="loginForm" name="normal_login" class="login-form"
                @finish="onFinishLogin" @finishFailed="onFinishFailed">
                <a-form-item label="用户名" name="name" :rules="[{ required: true, message: '请输入用户名!' }]">
                    <a-input v-model:value="loginForm.name">
                        <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                        </template>
                    </a-input>
                </a-form-item>

                <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
                    <a-input-password v-model:value="loginForm.password">
                        <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>

                <a-form-item>
                    <a-button :disabled="loginDisabled" type="primary" html-type="submit" class="login-form-button">
                        登录
                    </a-button>
                    <div style="text-align: right;margin-top:20px;">忘记密码？<a href="#"
                            @click="mode = 'repassword'">点我重置!</a></div>
                    <div style="text-align: right;margin-top:20px;">或者<a href="#" @click="mode = 'register'">现在注册!</a>
                    </div>
                </a-form-item>
            </a-form>

            <a-form v-show="mode == 'register'" :model="registerForm" name="normal_register" class="login-form"
                @finish="onFinishRegister" @finishFailed="onFinishFailed">
                <a-form-item label="用户名" name="name" :rules="[{ required: true, message: '请输入用户名!' }]">
                    <a-input v-model:value="registerForm.name">
                        <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                        </template>
                    </a-input>
                </a-form-item>

                <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
                    <a-input-password v-model:value="registerForm.password">
                        <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>

                <a-form-item label="性别" name="gender" :rules="[{ required: true, message: '请选择性别!' }]">
                    <a-radio-group v-model:value="registerForm.gender">
                        <a-radio value="1">男</a-radio>
                        <a-radio value="0">女</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item label="头像" name="picUrl">
                    <ImageUploader />
                </a-form-item>

                <a-form-item>
                    <a-button :disabled="registerDisabled" type="primary" html-type="submit" class="login-form-button">
                        注册
                    </a-button>
                    <div style="text-align: right;margin-top:20px;">或者<a href="#" @click="mode = 'login'">现在登录!</a>
                    </div>
                </a-form-item>
            </a-form>

            <a-form v-show="mode == 'repassword'" :model="repasswordForm" name="normal_repassword" class="login-form"
                @finish="onFinishRepassword" @finishFailed="onFinishFailed">
                <a-form-item label="新密码" name="newPassword" :rules="[{ required: true, message: '新密码不能为空!' }]">
                    <a-input-password v-model:value="repasswordForm.newPassword">
                        <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>

                <a-form-item label="确认密码" name="confirmPassword" :rules="[{ required: true, message: '请再次确认新密码!' }]">
                    <a-input-password v-model:value="repasswordForm.confirmPassword">
                        <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>

                <a-form-item>
                    <a-button :disabled="repasswordDisabled" type="primary" html-type="submit"
                        class="login-form-button">
                        重置密码
                    </a-button>
                    <div style="text-align: right;margin-top:20px;">或者<a href="#" @click="mode = 'login'">现在登录!</a>
                    </div>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import { userApi } from '@/api';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { setToken } from '@/utils/auth';
import { useRouter } from 'vue-router';
import ImageUploader from '@/components/ImageUploader.vue';
import { useAvatarStore } from '@/stores';
import backgroundImage from '@/assets/svg/login.svg';
import { message } from 'ant-design-vue';

const mode = ref('login');

const avatarStore = useAvatarStore();

const router = useRouter();

const loginForm = reactive({
    name: '',
    password: '',
});

const registerForm = reactive({
    name: '',
    password: '',
    gender: '',
    picUrl: ''
});

const repasswordForm = reactive({
    newPassword: '',
    confirmPassword: '',
});
const onFinishLogin = async values => {
    const res = await userApi.userLogin(values);
    if (res.data == '系统错误') return message.error('用户名或密码错误！');
    setToken(res.data)
    message.success('登录成功')
    router.push('/')
};

const onFinishRegister = async (values) => {
    const picUrl = avatarStore.getAvatar
    Object.assign(values, { picUrl })
    await userApi.userRegister(values);
    message.success('注册成功')
    mode.value = 'login'
};

const onFinishRepassword = async (values) => {
    // await userApi.userRepassword(values);
    message.success('重置密码成功')
    mode.value = 'login'
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
const loginDisabled = computed(() => {
    return !(loginForm.name && loginForm.password);
});
const registerDisabled = computed(() => {
    return !(registerForm.name && registerForm.password && registerForm.gender);
});
const repasswordDisabled = computed(() => {
    return !(repasswordForm.newPassword && repasswordForm.confirmPassword);
});
</script>
<style scoped>
.login-form {
    max-width: 500px;
}

.login-form-forgot {
    float: right;
}

.login-form-button {
    width: 100%;
}
</style>