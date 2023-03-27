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

module.exports = {
    getUsers,
  createUser,
};
