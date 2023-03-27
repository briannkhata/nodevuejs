const userService = require("./userService");

const getDataController = async (req, res) => {
  try {
    const employees = await userService.getDataFromDBService();
    res.status(200).send({ status: true, data: employees });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: "Error retrieving data" });
  }
};

const createUserController = async (req, res) => {
  try {
    const status = await userService.createUserDBService(req.body);
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
  getDataControllerfn,
  createUserControllerfn,
};
