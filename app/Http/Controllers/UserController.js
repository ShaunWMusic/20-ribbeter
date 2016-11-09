'use strict';

class UserController {
  * index(request, response) {
  }

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {

  }


module.exports = UserController;
