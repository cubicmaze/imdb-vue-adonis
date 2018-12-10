'use strict'
const Model = use('Model')

class Movie extends Model {
    /* 
       This custom data Serializer get rid of additional meta & pivot attributes that 
        Lucid ORM automaticaly adds to the model when using pivot models/tables
    */
    static get Serializer() {
        return 'App/GenericSerializer'
    }
   
    genres () {
        return this.hasMany('App/Models/MovieGenre')
    }

    actors () {
        return this
          .belongsToMany('App/Models/Actor')
          .pivotModel('App/Models/Role')
          .withPivot(['role'])
    }

    directors () {
        return this
          .belongsToMany('App/Models/Director')
          .pivotTable('movies_directors')
    }

    /* 
        I added a computed property "role" so we can directly access
        the role that the Actor played in each Movie
    */
    static get computed() {
        return ['role']
    }

    getRole(ctx) {
        if(this.$relations.pivot){
            return this.$relations.pivot.$attributes.role
        }
    }


}

module.exports = Movie
