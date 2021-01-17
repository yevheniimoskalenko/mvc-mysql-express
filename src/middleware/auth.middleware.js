import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function (req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(400)
      .json({ status: 'error', message: 'token is not set' });
  }
  const token = authorization.replace('Bearer ', '');

  if (token === '') {
    return res.json({ status: 'error', message: 'empty token' });
  }

  try {
    const obj = jwt.verify(token, process.env.secret);
    req.user = obj;
    next();
  } catch (err) {
    return res.json({ status: 'error', message: err.message });
  }
}
