var express = require('express');
var router = express.Router();
const {
  getAccounts,
  getAccountById,
  createAccount
 
} = require('../../../../controllers/account.controller')

/* GET home page. */
router.get('/', getAccounts)
router.get('/:id', getAccountById)
router.post('/', createAccount)
module.exports = router;
