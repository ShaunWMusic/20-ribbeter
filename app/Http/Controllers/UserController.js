'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * index(request, response) {
    const users = yield User.all();

    yield response.sendView('user.index', {
      users: users.toJSON(),
    });
  }

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    const { username, email, password } = request.all();

    try {
      const user = yield User.create({
        username,
        email,
        password: yield Hash.make(password),
      });

      yield request.auth.login(user);

      yield request.with({
        success: 'You have successfully created a new account',
      }).flash();

      response.redirect('/users');
    } catch (e) {
      yield request
        .withOut('password')
        .andWith({ error: 'That email or username is already taken' })
        .flash();

      response.redirect('back');
    }
  }
}

module.exports = UserController;
