import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// 配置 cors 选项
const corsOptions = {
  origin: "http://localhost:4000", // 允许来自特定源的请求
  methods: ["GET", "POST", "PUT", "DELETE"], // 允许的方法
  allowedHeaders: ["Content-Type", "Authorization", "X-Token"], // 允许的头部
  credentials: true, // 是否允许携带 cookie
};

// 使用 cors 中间件
app.use(cors(corsOptions));

// GET 请求的 test 接口
app.get("/api/test", (req, res) => {
  //   console.log("收到 GET 请求");
  res.send({ code: 200, data: "请求成功" });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
