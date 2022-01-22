/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/',  'HomeController.index') 
Route.group(()=>{
  Route.group(() =>{
    Route.get('/member',  'MembersController.index') 
    Route.post('/member',  'MembersController.store') 
    Route.get('/members/:id', 'MembersController.show')//edit a  member 
    Route.patch('/member/:id',  'MembersController.update')   
    Route.delete('/member/:id', 'MembersController.destroy') 
  }).middleware('auth')

  Route.get('/signup',  'MembersController.index')
  Route.post('/signup', 'AuthController.signup')
  Route.post('/login', 'AuthController.login')


}).prefix('api')

