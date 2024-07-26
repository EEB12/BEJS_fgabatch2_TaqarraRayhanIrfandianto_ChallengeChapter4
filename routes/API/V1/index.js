const express = require("express");
const router = express.Router();
const USER_ROUTER = require("./user");
const ACCOUNT_ROUTER = require("./account");
const TRANSACTION_ROUTER = require("./transaction");


router.use("/user", USER_ROUTER);

router.use("/account", ACCOUNT_ROUTER);
router.use("/transaction", TRANSACTION_ROUTER);
module.exports = router;