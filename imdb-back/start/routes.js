'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//MovieController routes
Route.get('/movies/search', 'MovieController.search')
Route.get('/movies/top', 'MovieController.top')
Route.get('/movies/:id', 'MovieController.get')

//ActorController routes
Route.get('/actors/search', 'ActorController.search')
Route.get('/actors/:id', 'ActorController.get')
