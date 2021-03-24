import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
  const users = await User.find().populate('posts', { title: 1, message: 1 });
  res.json(users);
};

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({
      errors: {
        password: 'Please enter a password longer than six characters',
      },
    });
  }
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      passwordHash,
    });
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

function handleErrors(error) {
  const errors = { email: '', password: '' };

  // duplicate error code
  if (error.code === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validation errors
  if (error.name === 'ValidationError') {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}
