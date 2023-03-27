const userModel = require("./userModel");
const getUsers = () => {
  return new Promise((resolve, reject) => {
    userModel.find({}, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
const createUser = (userDetails) => {
  const user = new userModel({
    name: userDetails.name,
    address: userDetails.address,
    phone: userDetails.phone,
  });

  return user
    .save()
    .then(() => true)
    .catch(() => false);
};

module.exports = {
  getUsers,
  createUser,
};
