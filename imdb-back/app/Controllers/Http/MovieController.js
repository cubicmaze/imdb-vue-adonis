'use strict'
const Movie = use('App/Models/Movie')

class MovieController {

    async search ({ request, response, params }) {
        
        try{

            const query = request.input('query');
            const movies = await Movie.query().whereRaw(`name LIKE '%${query}%'`).fetch();
            return movies;

        }catch(err){
            return {err:err.message};
        }

    }


    async top ({ request, response, params }) {
        
        try{

            const from = request.input('from');
            const to = request.input('to');

            const topMovies = await Movie
                .query()
                .where('year', '>=', from)
                .where('year', '<=', to)
                .orderBy('rank', 'desc')
                .limit(10)
                .fetch();

            return topMovies;

        }catch(err){
            return {err:err.message};
        }

    }


    async get ({ request, response, params  }) {
        
        try{

            const id = params.id;

            const movie = await Movie
                .query()
                .where('id', id)
                .with('actors')
                .with('genres')
                .with('directors')
                .first();

            return movie;

        }catch(err){
            return {err:err.message};
        }

    }

}

module.exports = MovieController
