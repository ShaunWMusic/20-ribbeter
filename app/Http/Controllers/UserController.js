'use strict';

class UserController {
  * index(request, response) {
  }

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {

  }

  * show(request, response) {
  //
  }

  * edit(request, response) {
  //
  }

  * update(request, response) {
  //
  }

  * destroy(request, response) {
  //
  }
}

module.exports = UserController;
