const db = require("../db/index");
const { response } = require("../../../lib/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authConfig = {
  jwtSecret: "ThisIsATestSecret",
};

const getRole = async (req, res) => {
  try {
    let result = await db.getRole();
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error processing request", null, 500);
  }
};

const authenticateUser = async (req, res) => {
  let password = req.body.password;
  try {
    let result = await db.findUser(req.body);
    let user = result[0][0];
    if (bcrypt.compareSync(password, user.password)) {
      let finalRes = {
        userId: user.userId,
        username: user.username,
        emailId: user.emailId,
        token: user.token,
        wallet: user.wallet,
        role: user.Role.split(",")[0],
        permission: user.permissions,
      };
      response(res, null, "User authenticated successfully.", finalRes, 200);
    } else {
      response(res, null, "Wrong password", null, 404);
    }
  } catch (err) {
    response(res, null, "Authentication failed", null, 404);
  }
};

const registerUser = async (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);

  let params = {
    username: req.body.username,
    emailId: req.body.emailId,
    password: hashedPassword,
    roleId: req.body.roleId,
  };

  try {
    let result = await db.createUser(params);

    let user = result[0][0];
    let finalRes = {
      userId: user.userId,
      username: user.username,
      emailId: user.emailId,
      token: user.token,
      wallet: user.wallet,
      role: user.Role.split(",")[0],
      permission: user.permission,
    };
    response(res, null, "User authenticated successfully.", finalRes, 200);
  } catch (err) {
    response(res, null, "Error in creating new user", null, 404);
  }
};

const getProfile = async (req, res) => {
  try {
    let result = await db.getProfile();
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error processing request", null, 500);
  }
};

const updateProfile = async (req, res) => {
  try {
    let result = await db.updateProfile(req.body);
    response(res, null, "Query executed successfully", result[0], 200);
  } catch (err) {
    response(res, err, "Error processing request", null, 500);
  }
};

module.exports = {
  getProfile,
  getRole,
  registerUser,
  updateProfile,
  authenticateUser,
};
