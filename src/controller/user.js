const User = require("../model/user");

exports.create = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password
    });

    return res.status(200).json({
      message: "OK",
      data: newUser
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error create",
      data: e
    });
  }
};

exports.list = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      message: "OK",
      data: users
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error list",
      data: e
    });
  }
};
