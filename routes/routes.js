const express = require("express");
const userController = require('../src/user/userController')
const router = express.Router();


router.route('/user/getAll').get(userController.getUsers);
router.route('/user/create').post(userController.createUser);
router.route('/user/update/:id').patch(userController.updateUser);



module.exports = router;