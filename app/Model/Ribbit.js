'use strict'

const Lucid = use('Lucid')

class Ribbit extends Lucid {


  body() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }
}

module.exports = Ribbit
