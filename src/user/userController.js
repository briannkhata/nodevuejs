const userService = require("./userService");

const getUsers = async (req, res) => {
  try {
    const employees = await userService.getUsers();
    res.status(200).send({ status: true, data: employees });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: "Error retrieving data" });
  }
};

const createUser = async (req, res) => {
  try {
    const status = await userService.createUser(req.body);
    if (status) {
      res
        .status(201)
        .send({ status: true, message: "User created successfully" });
    } else {
      res.status(400).send({ status: false, message: "Error creating user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: "Error creating user" });
  }
};

const updateUser = async (req, res) => {
    try {
      const status = await userService.updateUser(req.params.id, req.body);
      if (status) {
        res
          .status(201)
          .send({ status: true, message: "User updated successfully" });
      } else {
        res.status(400).send({ status: false, message: "Error updating User" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: false, message: "Error updating User" });
    }
  };

  const getUser = async (req, res) => {
    try {
      const employee = await userService.getUser(req.params.id);
      res.status(200).send({ status: true, data: employee});
    } catch (error) {
      res.status(500).send({ status: false, message: "Error retrieving data" });
    }
  };


  const removeUser = async (req, res) => {
    try {
      const status = await userService.removeUser(req.params.id);
      if (status) {
        res
          .status(201)
          .send({ status: true, message: "User removed successfully" });
      } else {
        res.status(400).send({ status: false, message: "Error removing User" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: false, message: "Error removing User" });
    }
  };


module.exports = {
    getUsers,
  createUser,
  updateUser,
  getUser,
  removeUser
};
