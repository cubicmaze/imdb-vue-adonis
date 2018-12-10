'use strict'
const Model = use('Model')

class Actor extends Model {
    /* 
       This custom data Serializer get rid of additional meta & pivot attributes that 
        Lucid ORM automaticaly adds to the model when using pivot models/tables
    */
    static get Serializer() {
        return 'App/GenericSerializer'
    }

    movies () {
        return this
          .belongsToMany('App/Models/Movie')
          .pivotModel('App/Models/Role')
          .withPivot(['role'])
    }

    /* 
        I added a computed property "role" so we can directly access
        the role of each actor for a specific movie 
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

module.exports = Actor
