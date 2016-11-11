'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('layout');

Route.get('/register', 'UserController.create');
Route.post('/register', 'UserController.store');

Route.get('/login', 'loginController.create');
Route.post('/login', 'LoginController.store');

Route.get('/users', 'UserController.index').middleware('auth');

Route.any('/logout', 'LoginController.destroy');
Route.resource('/api/ribbits', 'Api/RibbitController').middleware('auth');

Route.any('*').render('vue').middleware('auth');
