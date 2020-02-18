'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(params) {
    const { app } = this;
    try {
      const result = await app.mysql.get('user', params);
      console.log(params);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserService
;
