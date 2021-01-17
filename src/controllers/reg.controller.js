import User from '../model/user.model.js';
import { hashSync, genSaltSync } from 'bcrypt';
export default async (req, res) => {
  const { email, password } = req.body;
  if (email === '') return res.json('Будь-ласка напишіть електроний адрес');
  const salt = genSaltSync(10);
  const candiadat = await new User({
    email,
    password: hashSync(password, salt),
  });
  const users = await candiadat.findById().then((result) => result.length);
  if (users === 0) {
    await candiadat.save();
    return res.json('Успішно зареєстрований');
  } else {
    return res.json('Користувач уже був зареєстрований раніше');
  }
};
