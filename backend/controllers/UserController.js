import User from '../models/UserModel.js';

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  });
  try {
    const insertedNewUser = await user.save();
    res.status(201).json(insertedNewUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
