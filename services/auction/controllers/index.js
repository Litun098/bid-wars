const db = require("../db/index");
const { response } = require("../../../lib/response");

const getAllAuctions = async (req, res) => {
  try {
    let result = await db.getAllAuctions(req.query);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const getAuctions = async (req, res) => {
  try {
    let result = await db.getAuctions(req.query);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const pay = async (req, res) => {
  try {
    let result = await db.pay(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};

const getMyAuctions = async (req, res) => {
  try {
    let result = await db.getMyAuctions(req.query);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const createAuction = async (req, res) => {
  try {
    let result = await db.createAuction(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const updateAuction = async (req, res) => {
  try {
    let result = await db.updateAuction(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const deleteAuctions = async (req, res) => {
  try {
    let result = await db.deleteAuctions(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const getAuctionsCategory = async (req, res) => {
  try {
    let result = await db.getAuctionsCategory();
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const Bid = async (req, res) => {
  try {
    let result = await db.Bid(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const getMyBids = async (req, res) => {
  try {
    let result = await db.getBids(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const getInvoice = async (req, res) => {
  try {
    let result = await db.getInvoice(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};
const getMyPurchase = async (req, res) => {
  try {
    let result = await db.getMyPurchase(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error executing query", null, 404);
  }
};

module.exports = {
  getAllAuctions,
  getMyAuctions,
  getAuctions,
  pay,
  Bid,
  createAuction,
  deleteAuctions,
  getAuctionsCategory,
  getInvoice,
  getMyBids,
  getMyPurchase,
  updateAuction,
};
