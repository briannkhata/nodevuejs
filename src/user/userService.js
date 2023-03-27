const userModel = require("./userModel");

module.exports.getDataFromDBService = () => {
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

module.exports.createUserDBService = (userDetails) => {
  const userModelData = new userModel({
    name: userDetails.name,
    address: userDetails.address,
    phone: userDetails.phone,
  });

  return userModelData
    .save()
    .then(() => true)
    .catch(() => false);
};
