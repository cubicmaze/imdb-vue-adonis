'use strict'
const Model = use('Model')

class MovieGenre extends Model {

    static get table () {
        return 'movies_genres'
    }

}

module.exports = MovieGenre
