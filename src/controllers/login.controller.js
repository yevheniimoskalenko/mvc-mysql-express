import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
  const { email, password } = req.body;
  const candiadate = await new User({ email, password }).findById();
  const isCorrect = compareSync(password, candiadate[0].password);
  if (candiadate[0].email === email && isCorrect) {
    const token = jwt.sign(
      {
        email: candiadate[0].email,
        id: candiadate[0].id,
      },
      process.env.secret,
      { expiresIn: 60 * 24 * 3600 }
    );

    return res.json({ token });
  }
};
