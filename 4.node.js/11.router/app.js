const express = require("express");
const app = express();

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const cartRouter = require("./cartRouter");

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("웰컴");
});

app.listen(3000, () => {
  console.log("서버 레디");
});
