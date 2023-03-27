const express = require("express");
const userController = require('../src/user/userController')
const router = express.Router();


router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/create').post(userController.createUserControllerfn);


module.exports = router;