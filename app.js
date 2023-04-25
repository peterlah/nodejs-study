const express = require("express");
const app = express();
const port = 3000;

// db connection
const connect = require("./schemas");
connect();

// middleware
app.use(express.json());

// 라우터
const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts");

// localhost:3000/api -> goodsRouter, cartsRouter
app.use("/api", [goodsRouter, cartsRouter]);

app.listen(port, () => {
  console.log("Server is running. PORT :", port);
});