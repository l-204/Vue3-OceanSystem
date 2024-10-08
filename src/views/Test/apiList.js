export const apiList = [
  {
    name: "主页面",
    api: "showApi",
    func: "simplePage",
    path: "/show/simplePage",
    method: "post",
    form: {
      fields: [
        {
          name: "page",
          label: "页码",
          component: "a-input",
          placeholder: "请输入页码",
          initialValue: "1",
        },
        {
          name: "pageSize",
          label: "每页数量",
          component: "a-input",
          placeholder: "请输入每页数量",
          initialValue: "10",
        },
        {
          name: "species",
          label: "物种",
          component: "a-input",
          placeholder: "请输入物种",
          initialValue: "龙",
        },
        {
          name: "name",
          label: "名称",
          component: "a-input",
          placeholder: "请输入名称",
          initialValue: "",
        },
      ],
    },
    body: {
      page: "1",
      pageSize: "10",
      species: "龙",
      name: "",
    },
  },
  {
    name: "样本详细状态",
    api: "showApi",
    func: "simpleDetail",
    path: "/show/simpleDetail",
    method: "get",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1280842760408006656",
        },
      ],
    },
    params: { rid: "1280842760408006656" },
  },
  {
    name: "获取用户列表",
    api: "userApi",
    func: "userList",
    path: "/user/list",
    method: "get",
    form: {
      fields: [],
    },
  },
  {
    name: "获取特定用户",
    api: "userApi",
    func: "userInfo",
    path: "/user/info",
    method: "get",
    form: {
      fields: [],
    },
  },
  {
    name: "样本登记",
    api: "simpleApi",
    func: "simpleRegister",
    path: "/simple/register",
    method: "post",
    form: {
      fields: [
        {
          name: "place",
          label: "地点",
          component: "a-input",
          placeholder: "请输入地点",
          initialValue: "中国海洋大学",
        },
        {
          name: "species",
          label: "物种",
          component: "a-input",
          placeholder: "请输入物种",
          initialValue: "耳朵龙",
        },
        {
          name: "name",
          label: "名称",
          component: "a-input",
          placeholder: "请输入名称",
          initialValue: "耳龙人",
        },
        {
          name: "appraiser",
          label: "鉴定人",
          component: "a-input",
          placeholder: "请输入鉴定人",
          initialValue: "江林",
        },
        {
          name: "saveWay",
          label: "保存方式",
          component: "a-input",
          placeholder: "请输入保存方式",
          initialValue: "碳烤",
        },
        {
          name: "savePlace",
          label: "保存地点",
          component: "a-input",
          placeholder: "请输入保存地点",
          initialValue: "中国海洋大学",
        },
        {
          name: "remark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "注意安全",
        },
      ],
    },
    body: {
      place: "中国海洋大学",
      species: "耳朵龙",
      name: "耳龙人",
      appraiser: "江林",
      saveWay: "碳烤",
      savePlace: "中国海洋大学",
      remark: "注意安全",
    },
  },
  {
    name: "样本处理",
    api: "simpleApi",
    func: "simpleDispose",
    path: "/simple/dispose",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1283813462610280448",
        },
        {
          name: "disposeWay",
          label: "处理方式",
          component: "a-input",
          placeholder: "请输入处理方式",
          initialValue: "加热",
        },
        {
          name: "disposeResult",
          label: "处理结果",
          component: "a-input",
          placeholder: "请输入处理结果",
          initialValue: "成功",
        },
        {
          name: "disposeRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "尽快吃",
        },
      ],
    },
    body: {
      rid: "1283813462610280448",
      disposeWay: "加热",
      disposeResult: "成功",
      disposeRemark: "尽快吃",
    },
  },
  // {
  //   name: "样本删除",
  //   api: "simpleApi",
  //   func: "simpleDelete",
  //   path: `/simple/delete`,
  //   method: "post",
  //   form: {
  //     fields: [],
  //   },
  //   body: { rid: "1280842760408006656" },
  // },
  {
    name: "样本质量评估",
    api: "simpleApi",
    func: "simpleQuality",
    path: "/simple/quality",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "样本ID",
          component: "a-input",
          placeholder: "请输入样本ID",
          initialValue: "1280842760408006636",
        },
        {
          name: "assessWay",
          label: "评估方式",
          component: "a-input",
          placeholder: "请输入评估方式",
          initialValue: "这样评估",
        },
        {
          name: "assessResult",
          label: "评估结果",
          component: "a-input",
          placeholder: "请输入评估结果",
          initialValue: "评估结果为这个",
        },
        {
          name: "assessRemark",
          label: "评估备注",
          component: "a-input",
          placeholder: "请输入评估备注",
          initialValue: "没有备注",
        },
      ],
    },
    body: {
      rid: "1280842760408006636",
      assessWay: "",
      assessResult: "",
      assessRemark: "",
    },
  },
  {
    name: "点击存储",
    api: "simpleApi",
    func: "simpleSave",
    path: "/simple/save",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1280842760408006656",
        },
        {
          name: "saveWay",
          label: "保存方式",
          component: "a-input",
          placeholder: "请输入保存方式",
          initialValue: "手部",
        },
        {
          name: "saveRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "不要好好保存",
        },
      ],
    },
    body: {
      rid: "1280842760408006656",
      saveWay: "手部",
      saveRemark: "不要好好保存",
    },
  },
  {
    name: "点击取出",
    api: "simpleApi",
    func: "simpleRemove",
    path: "/simple/remove",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1280842760408006656",
        },
        {
          name: "removeResult",
          label: "取出结果",
          component: "a-input",
          placeholder: "请输入取出结果",
          initialValue: "不需要了",
        },
        {
          name: "removeRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "没有",
        },
      ],
    },
    body: {
      rid: "1280842760408006656",
      removeResult: "不需要了",
      removeRemark: "没有",
    },
  },
  {
    name: "点击借出",
    api: "simpleApi",
    func: "simpleLend",
    path: "/simple/lend",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1280842760408006656",
        },
        {
          name: "lendPurpose",
          label: "借出目的",
          component: "a-input",
          placeholder: "请输入借出目的",
          initialValue: "我康康",
        },
        {
          name: "lendRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "没有",
        },
        {
          name: "predictReturnDate",
          label: "预计归还日期",
          component: "a-input",
          placeholder: "请输入预计归还日期",
          initialValue: "2024-9-10",
        },
      ],
    },
    body: {
      rid: "1280842760408006656",
      lendPurpose: "我康康",
      lendRemark: "没有",
      predictReturnDate: "2024-9-10",
    },
  },
  {
    name: "点击归还",
    api: "simpleApi",
    func: "simpleReturnSimple",
    path: "/simple/returnSimple",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1280842760408006656",
        },
        {
          name: "returnRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "我要归还",
        },
      ],
    },
    body: {
      rid: "1280842760408006656",
      returnRemark: "我要归还",
    },
  },
  {
    name: "点击销毁",
    api: "simpleApi",
    func: "simpleDestroyedSimple",
    path: "/simple/destroyedSimple",
    method: "post",
    form: {
      fields: [
        {
          name: "rid",
          label: "记录ID",
          component: "a-input",
          placeholder: "请输入记录ID",
          initialValue: "1280842760408006656",
        },
        {
          name: "destroyedWay",
          label: "销毁方式",
          component: "a-input",
          placeholder: "请输入销毁方式",
          initialValue: "没有",
        },
        {
          name: "destroyedResult",
          label: "销毁原因",
          component: "a-input",
          placeholder: "请输入销毁原因",
          initialValue: "没有",
        },
        {
          name: "destroyedRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "无",
        },
      ],
    },
    body: {
      rid: "1280842760408006656",
      destroyedWay: "没有",
      destroyedResult: "没有",
      destroyedRemark: "无",
    },
  },
  {
    name: "数据统计主页面",
    api: "statisticsApi",
    func: "statisticsPage",
    path: "/statistics/page",
    method: "post",
    form: {
      fields: [
        {
          name: "page",
          label: "页码",
          component: "a-input",
          placeholder: "请输入页码",
          initialValue: "1",
        },
        {
          name: "pageSize",
          label: "每页数量",
          component: "a-input",
          placeholder: "请输入每页数量",
          initialValue: "20",
        },
      ],
    },
    body: {
      page: "1",
      pageSize: "20",
    },
  },
  {
    name: "更新数据统计",
    api: "statisticsApi",
    func: "statisticsUpdate",
    path: "/statistics/update",
    method: "post",
    form: {
      fields: [
        {
          name: "sid",
          label: "统计ID",
          component: "a-input",
          placeholder: "请输入统计ID",
          initialValue: "1280842760408006636",
        },
        {
          name: "saveWay",
          label: "保存方式",
          component: "a-input",
          placeholder: "请输入保存方式",
          initialValue: "这样保存",
        },
        {
          name: "savePlace",
          label: "保存地点",
          component: "a-input",
          placeholder: "请输入保存地点",
          initialValue: "这里保存",
        },
        {
          name: "statisticsRemark",
          label: "备注",
          component: "a-input",
          placeholder: "请输入备注",
          initialValue: "没有备注",
        },
        {
          name: "uid",
          label: "用户ID",
          component: "a-input",
          placeholder: "请输入用户ID",
          initialValue: "1280822205545971712",
        },
      ],
    },
    body: {
      sid: "1280842760408006636",
      saveWay: "这样保存",
      savePlace: "这里保存",
      statisticsRemark: "没有备注",
      uid: "1280822205545971712",
    },
  },
  // {
  //   name: "图片上传",
  //   api: "uploadApi",
  //   func: "uploadSimpleUrl",
  //   path: "/upload/simpleUrl",
  //   method: "post",
  //   form: {
  //     fields: [],
  //   },
  //   body: {},
  // },
];
