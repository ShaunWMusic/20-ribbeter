'use strict';

const Ribbit = use('App/Model/Ribbit');
const User = use('App/Model/User');

class RibbitController {

  * index(request, response) {
    const { user: username } = request.all();

    if (username) {
      const user = yield User.query().where({ username }).firstOrFail();

      const ribbits = yield user.ribbits().with('user').orderBy('created_at', 'desc').fetch();

      response.send(ribbits);
    } else {
      const ribbits = yield Ribbit.with('user').orderBy('created_at', 'desc').fetch();

      response.send(ribbits);
    }
  }

  * store(request, response) {
    const input = request.all();
    const { id } = request.currentUser;

    const ribbit = yield Ribbit.create({
      user_id: id,
      body: input.body,
    });

    yield ribbit.related('user').load();

    response.send(ribbit);
  }

}

module.exports = RibbitController;
