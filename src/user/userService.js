const userModel = require("./userModel");
const getUsers = async () => {
  try {
    const result = await userModel.find({});
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (userDetails) => {
  try {
    const user = new userModel({
         name: userDetails.name,
      address: userDetails.address,
        phone: userDetails.phone,
    });
    await user.save();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const updateUser = async (id, userDetails) => {
  try {
    await userModel.findByIdAndUpdate({_id: id}, userDetails);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
  

module.exports = {
  getUsers,
  createUser,
  updateUser
};
