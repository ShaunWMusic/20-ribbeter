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
    // Save the user
      const user = yield User.create({
        username,
        email,
        password: yield Hash.make(password),
      });

      yield request.auth.login(user);
    // login
      yield request.with({
        success: 'Congrats on your new account!',
      }).flash();
    // give them a success message
    // redirect them to the main site
      response.redirect('/users');
    } catch (e) {
      yield request
      .withOut('password') // shows us the old input values
      .andWith({ error: 'That username or email is already taken' })
      .flash(); // Makes this data only last for one request

      response.redirect('back');
    }
  }
}


module.exports = UserController;
