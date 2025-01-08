const Usermodel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  const { fullname, email, password } = req.body;

  const HashPassword = await Usermodel.HashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: HashPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ user, token });
};
