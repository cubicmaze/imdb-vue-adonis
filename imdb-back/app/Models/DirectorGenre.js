'use strict'
const Model = use('Model')

class DirectorGenre extends Model {

    static get table () {
        return 'directors_genres'
    }

}

module.exports = DirectorGenre
