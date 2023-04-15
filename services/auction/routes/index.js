const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const { AuthorizationMiddleware } = require("../../../lib/authMiddleWare");

router.get("/getAllAuction", controller.getAllAuctions);
router.get("/getMyAuction", AuthorizationMiddleware, controller.getMyAuctions);
router.get("/getAuction", AuthorizationMiddleware, controller.getAuctions);
router.post(
  "/createAuction",
  AuthorizationMiddleware,
  controller.createAuction
);
router.put("/updateAuction", AuthorizationMiddleware, controller.updateAuction);
router.delete(
  "/deleteAuction",
  AuthorizationMiddleware,
  controller.deleteAuctions
);
router.get("/getAuctionCategory", controller.getAuctionsCategory);
router.get("/bid", AuthorizationMiddleware, controller.Bid);
router.post("/pay", AuthorizationMiddleware, controller.pay);
router.post("/getMyBid", AuthorizationMiddleware, controller.getMyBids);
router.post(
  "/getMyPurchase",
  AuthorizationMiddleware,
  controller.getMyPurchase
);
router.post("/getInvoice", AuthorizationMiddleware, controller.getInvoice);

module.exports = router;
