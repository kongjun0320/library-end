'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    try {
      const result = await ctx.service.user.login(params);
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

module.exports = UserController;
