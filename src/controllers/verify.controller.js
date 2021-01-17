import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default async (req, res) => {
  const { authorization = '' } = req.headers;
  const token = authorization.replace('Bearer ', '');

  if (token === '')
    return res.json({ status: 'error', message: 'не авторизований' });
  try {
    const JWT = jwt.verify(token, process.env.secret);
    return res.json({ status: 'ok', token: JWT });
  } catch (err) {
    return res.json(err);
  }
};
