import User from '../model/user.model.js';

export default (req, res) => {
  new User(req.body).save();
  return res.json(req.body);
};
