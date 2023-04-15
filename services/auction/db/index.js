const conn = require("../../../database/connection");

const getAllAuctions = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getAllAuctions(?,?,?)",
      },
      [
        options.createdByUserId, 
        options.categoryId, 
        options.status
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

const getMyAuctions = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getMyAuctions(?)",
      },
      [options.auctionId],
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
const getAuctions = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getAuctions(?)",
      },
      [options.auctionId],
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
const deleteAuctions = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call deleteAuctions(?)",
      },
      [options.auctionId],
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
const getAuctionsCategory = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getAuctionsCategory()",
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
const createAuction = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call createAuction(?,?,?,?,?,?,?,?)",
      },
      [
        options.userId,
        options.title,
        options.description,
        options.imgUrl,
        options.startDate,
        options.endDate,
        options.categoryId,
        options.startingBid,
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

const updateAuction = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call updateAuction(?,?,?,?,?,?,?,?)",
      },
      [
        options.userId,
        options.title,
        options.description,
        options.imgUrl,
        options.startDate,
        options.endDate,
        options.categoryId,
        options.startingBid,
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

const Bid = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call Bid(?,?,?)",
      },
      [
        options.userId, 
        options.auctionId, 
        options.bidAmt
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

const pay = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call pay(?,?)",
      },
      [
        options.auctionId, 
        options.userId
      ],
      (error, results, fields) => {
        if (error) {
          reject("Error processing the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const getBids = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getBids(?)",
      },
      [options.userId],
      (error, results, fields) => {
        if (error) {
          reject("Error processing the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};
const getInvoice = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getInvoice(?,?)",
      },
      [
        options.auctionId, 
        options.userId
      ],
      (error, results, fields) => {
        if (error) {
          reject("Error processing the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};
const getMyPurchase = async (options) => {
  return new Promise((resolve, reject) => {
    connection.query(
      {
        sql: "call getMyPurchase(?)",
      },
      [options.userId],
      (error, results, fields) => {
        if (error) {
          reject("Error processing the data", error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  createAuction,
  deleteAuctions,
  getAllAuctions,
  getAuctions,
  getAuctionsCategory,
  getBids,
  getInvoice,
  getMyAuctions,
  getMyPurchase,
  pay,
  updateAuction,
  Bid,
};
