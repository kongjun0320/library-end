'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
  async swiper() {
    const { ctx } = this;
    try {
      const result = await ctx.service.book.swiper();
      ctx.body = {
        code: 0,
        list: result,
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: -1,
        list: null,
      };
    }
  }
  async bookType() {
    const { ctx } = this;
    try {
      const result = await ctx.service.book.bookType();
      ctx.body = {
        code: 0,
        list: result,
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: -1,
        list: null,
      };
    }
  }
  async bookCollect() {
    const { ctx } = this;
    try {
      const result = await ctx.service.book.bookCollect();
      ctx.body = {
        code: 0,
        list: result,
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: -1,
        list: null,
      };
    }
  }
}

module.exports = BookController
;
