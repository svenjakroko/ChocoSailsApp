/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /newproduct': { view: 'pages/newproduct' } ,
  'GET /newproducer': { view: 'pages/newproducer' },
  'GET /producerslist': { view: 'pages/producerslist' },
  'GET /newproduct':'post/newproduct',
  'GET /newproduct':'post/newproduct',
  'GET /':'post/homepage',
  'GET /producerslist':'post/producerslist',
  'GET /products':'ProductsController.products',
  'GET /producers':'ProducersController.producers',
  'POST /addproduct':'ProductsController.addProduct',
  'POST /addproducer':'ProducersController.addProducer',
  'GET /editproduct/:productId': 'ProductsController.editProduct',
  'GET /editproducer/:producerId': 'ProducersController.editProducer',
  'POST /updateproduct/:productId' : 'ProductsController.updateProduct',
  'POST /updateproducer/:producerId' : 'ProducersController.updateProducer',
  'GET /products/:productId':'ProductsController.findProduct',
  'GET /producers/:producerId':'ProducersController.findProducer',
  'DELETE /products/remove/:productId':'ProductsController.deleteProduct',
  'DELETE /producers/remove/:producerId':'ProducersController.deleteProducer'

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
