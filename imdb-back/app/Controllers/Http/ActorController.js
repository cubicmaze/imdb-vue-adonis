'use strict'
const Actor = use('App/Models/Actor')

class ActorController {

    async search ({ request, response, params }) {
        
        try{

            const query = request.input('query');
            const actors = await Actor.query().whereRaw(`CONCAT(first_name ,' ', last_name) LIKE '%${query}%'`).fetch();
            return actors;

        }catch(err){
            return {err:err.message};
        }

    }


    async get ({ request, response, params  }) {
        
        try{

            const id = params.id;

            const actor = await Actor
                .query()
                .where('id', id)
                .with('movies')
                .first();

            return actor;

        }catch(err){
            return {err:err.message};
        }

    }

}

module.exports = ActorController
