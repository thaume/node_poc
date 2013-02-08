/*###############################################
# 
# CRUD interface for users
#
###############################################*/


module.exports = function(app) {

  /* Database queries
  ----------------------------------------------*/
  var userDAO = require('../../DAO/userDAO'),
      eventer = require('../../eventer/'),
      url     = require('url');

  /* Get all users
  ----------------------------------------------*/
  app.get('/api/users', function(req, res) {

    userDAO.getAll();
    eventer.once('success', function(result) {
      return res.render('users/index', { results: result } );
    });
  });

  /* Get a specific user
  ----------------------------------------------*/
  app.get('/api/users/show/:id', function(req, res) {
    
    var id = req.params.id;

    userDAO.getById( id );
    eventer.once('success', function(result) {
      console.log(result);
      return res.render('users/show', { result: result } );
    });
  });

  /* Display new user form
  ----------------------------------------------*/
  app.get('/api/users/new', function(req, res) {

    return res.render('users/new');
  });

  /* Create a user
  ----------------------------------------------*/
  app.post('/api/users', function(req, res) {

    var postData = req.body;

    console.log(postData);

    userDAO.create( {title : postData.title, orgaName : postData.orgaName, orgaPosition : postData.orgaPosition, description:postData.description, category:postData.category, adress:postData.adress, dayStart:postData.dayStart, hourStart:postData.hourStart, dayEnd:postData.dayEnd, hourEnd:postData.hourEnd } );
    eventer.once('success', function( data ) {
      res.send( 200, { location: '/api/users/show/' + data.id } );
    });
  });

  /* Update a user entry
  ----------------------------------------------*/
  app.put('/api/users/:id', function(req, res) {
    
    var id        = req.params.id,
        upFields  = req.body;

    console.log(data);

    userDAO.update( id );
    eventer.once('success', function() {
      return res.send( 200, { message : 'Names updated !'} );
    });
  });

  /* Delete a specific user
  ----------------------------------------------*/
  app.delete('/api/users/:id', function(req, res) {
    
    var id = req.params.id;

    userDAO.delete( { "_id": id } );
    eventer.once('success', function() {
      res.send( 200, { message : 'user with id: '+ id +' was deleted', location: '/api/users/' } );
    });
  });

};

////////////////////////////////////////////////////////////////////////////////////////
// 
// CURL tests
//
// test get one : curl -i -X GET http://localhost:3000/api/users/:id
// test get all : curl -i -X GET http://localhost:3000/api/users
//
// test post new user : curl -i -X POST -d 'result={\"name\":\"tom\",\"age\":\"22\"}' http://localhost:3000/api/users
//
// test update one : curl -i -X PUT -d 'result={\"name\":\"tom\",\"age\":\"22\"}' http://localhost:3000/api/users/:id
//
// test delete one : curl -i -X DELETE http://localhost:3000/api/users/:id
//