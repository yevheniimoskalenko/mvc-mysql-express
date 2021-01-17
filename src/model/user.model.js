import './src/connect.js';

export class User {
  constructor({ options }) {
    this.email = options.email;
    this.password = options.password;
  }
  save() {
    console.log(this.email + ' ' + this.password);
  }
}
