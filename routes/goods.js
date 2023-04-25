const express = require("express");
const router = express.Router();

// localhost:3000/api/ GET
router.get("/", (req, res) => {
  res.send("default url for goods.js GET Method");
});

// localhost:3000/api/about GET
router.get("/about", (req, res) => {
  res.send("goods.js about PATH");
});

// goods schemas -> router
const Goods = require("../schemas/goods");
router.post("/goods", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res.status(400).json({ 
			success: false, 
			errorMessage: "이미 있는 데이터입니다." 
		});
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createdGoods });
});

// cart schemas -> router (POST)
const Cart = require("../schemas/cart");
router.post("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ 
    goodsId: Number(goodsId) 
  });
  if (existsCarts.length) {
    return res.json({ 
      success: false, 
      errorMessage: "이미 장바구니에 존재하는 상품입니다." 
    });
  }

  await Cart.create({ 
    goodsId: Number(goodsId), 
    quantity: quantity 
  });

  res.json({ result: "success" });
});

// cart schemas -> router (PUT)
router.put("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ 
    goodsId: Number(goodsId) 
  });
  if (existsCarts.length) {
    await Cart.updateOne({ 
      goodsId: Number(goodsId) 
    }, { 
      $set: { quantity } 
    });
  }

  res.json({ success: true });
})

// cart schemas -> router (DELETE)
router.delete("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;

  const existsCarts = await Cart.find({ goodsId });
  if (existsCarts.length > 0) {
    await Cart.deleteOne({ goodsId });
  }

  res.json({ result: "success" });
});

// export
module.exports = router;