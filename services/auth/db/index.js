const { connection } = require("../../../database/connection");
const getRole = async () => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getRole()",
      },
      [],
      (error, results, fields) => {
        if (error) {
          reject("Error fetching the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const findUser = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call findUser(?)",
      },
      [options.emailId],
      (error, results, fields) => {
        if (error) {
          reject("Error fetching the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const createUser = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call createUser(?)",
      },
      [options.username, options.emailId, options.roleId, options.password],
      (error, results, fields) => {
        if (error) {
          reject("Error fetching the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const getProfile = async (options) => {
  return new Promise((resolve, reject) => {
    let userId = options.userId;
    if (userId === undefined || userId == null) {
      return reject("Couldn't find the user");
    }
    connection.query(
      {
        sql: "call getProfile(?)",
      },
      [userId],
      (error, results, fields) => {
        if (error) {
          reject("Error fetching the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const updateProfile = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call updateProfile(?,?,?,?,?,?,?,?,?,?)",
      },
      [
        options.userId,
        options.name,
        options.emailId,
        options.sex,
        options.age,
        options.houseNo,
        options.street,
        options.city,
        options.country,
        options.wallet,
        options.imgUrl,
      ],
      (error, results, fields) => {
        if (error) {
          reject("Error fetching the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  createUser,
  findUser,
  getProfile,
  getRole,
  updateProfile,
};
