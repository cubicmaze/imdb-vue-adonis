'use strict'
const Model = use('Model')

class Director extends Model {
    /* 
       This custom data Serializer get rid of additional meta & pivot attributes that 
        Lucid ORM automaticaly adds to the model when using pivot models/tables
    */
    static get Serializer() {
        return 'App/GenericSerializer'
    }

    genres () {
        return this.hasMany('App/Models/DirectorGenre')
    }

    movies () {
        return this
          .belongsToMany('App/Models/Movie')
          .pivotTable('movies_directors')
    }

}

module.exports = Director
