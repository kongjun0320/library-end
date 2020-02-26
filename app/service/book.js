'use strict';

const Service = require('egg').Service;

class BookService extends Service {
  async swiper() {
    const { app } = this;
    try {
      const result = await app.mysql.select('swiper');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async bookType() {
    const { app } = this;
    try {
      const result = await app.mysql.select('bookType');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async bookCollect() {
    const { app } = this;
    try {
      const result = await app.mysql.select('bookCollect');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = BookService
;
