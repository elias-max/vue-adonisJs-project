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
    Route.get('/member/:id', 'MembersController.show')//edit a  member 
    Route.patch('/member/:id',  'MembersController.update')   
    Route.delete('/member/:id', 'MembersController.destroy') 
  }).middleware('auth')
   Route.group(() =>{
    Route.get('/expense',  'ExpensesController.index') 
    Route.post('/expense',  'ExpensesController.store') 
    Route.get('/expense/:id', 'ExpensesController.show')//edit a  member 
    Route.patch('/expense/:id',  'ExpensesController.update')   
    Route.delete('/expense/:id', 'ExpensesController.destroy') 
  }).middleware('auth')
  Route.group(() =>{
    Route.get('/income',  'IncomesController.index') 
    Route.post('/income',  'IncomesController.store') 
    Route.get('/income/:id', 'IncomesController.show')//edit a  member 
    Route.patch('/income/:id',  'IncomesController.update')   
    Route.delete('/income/:id', 'IncomesController.destroy') 
  }).middleware('auth')
  Route.group(() =>{
    Route.get('/expensetype',  'ExpenseTypesController.index') 
    Route.post('/expensetype',  'ExpenseTypesController.store') 
    Route.get('/expensetype/:id', 'ExpenseTypesController.show')//edit a  member 
    Route.patch('/expensetype/:id',  'ExpenseTypesController.update')   
    Route.delete('/expensetype/:id', 'ExpenseTypesController.destroy') 
  }).middleware('auth')
  Route.group(() =>{
    Route.get('/incometype',  'IncomeTypesController.index') 
    Route.post('/incometype',  'IncomeTypesController.store') 
    Route.get('/incometype/:id', 'IncomeTypesController.show')//edit a  member 
    Route.patch('/incometype/:id',  'IncomeTypesController.update')   
    Route.delete('/incometype/:id', 'IncomeTypesController.destroy') 
  }).middleware('auth')

  Route.get('/signup',  'MembersController.index')
  Route.post('/signup', 'AuthController.signup')
  Route.post('/login', 'AuthController.login')


}).prefix('api')

