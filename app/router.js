'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/user/login', controller.user.login);
  router.get('/swiper', controller.book.swiper);
  router.get('/bookType', controller.book.bookType);

  router.get('/bookCollect', controller.book.bookCollect);
};
