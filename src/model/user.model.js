import connection from './connect.js';

export default class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }

  async save() {
    const result = await connection.query(
      `INSERT INTO user (email, password) VALUES ('${this.email}', '${this.password}')`
    );
    return result;
  }
  async findById() {
    let result = await connection.query(
      `SELECT * FROM user WHERE email = '${this.email}'`
    );
    return await result[0];
  }
}
