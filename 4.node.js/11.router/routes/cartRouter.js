const express = require("express");
const router = express.Router();

//라우트 체인
router.route("/", (req, res) => {
  re.send("상품 조회");
});

router.route("details", (req, res) => {
  res.send("상품 추가");
});

router.route("/:id/details", (req, res) => {
  const productId = req.params.Id;
  res.send(`상품 개별 ${productId}상세 목록 출력`);
});

module.exports = router;
