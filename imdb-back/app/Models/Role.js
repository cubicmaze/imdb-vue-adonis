'use strict'
const Model = use('Model')

class Role extends Model {

    actor () {
        return this.hasOne('App/Models/Actor')
    }

    movie () {
        return this.hasOne('App/Models/Movie')
    }

}

module.exports = Role
