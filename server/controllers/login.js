import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'incorrect email or password',
    });
  }

  const payloadForToken = {
    id: user._id,
    fullName: `${user.firstName} ${user.lastName}`,
  };
  const accessToken = jwt.sign(payloadForToken, process.env.JWT_SECRET);

  res.json({ accessToken, user: user._id });
};