/*###############################################
# 
# DAO interface for users's database queries
#
###############################################*/

/* Load model
-----------------------------------------------*/
var eventModel = require('../model/event'),
    eventer    = require('../eventer/');

/* Create user
-----------------------------------------------*/
exports.create = function( data ) {
  // Creating one event and save it to the database.
  var newEvent = new eventModel ({
    event:{
      title: data.title,
      organiser: { 
        name: data.orgaName, 
        currentPosition: data.orgaPosition
      },
      details: {
        description: data.description,
        category: data.category,
        adress: data.adress,
        startDay: data.dayStart,
        startHour: data.hourStart,
        endDay: data.dayEnd,
        endHour: data.hourEnd
      }
    }
  }).save(function (err, savedEvent) { 
    if (err) { 
      console.log ('Error on save!');
    } else {
      console.log('Result of save: '+savedEvent)
      eventer.emit( 'success', { id: savedEvent.id } );
    }
  });

};

/* Get user by ID
-----------------------------------------------*/
exports.getById = function( id ) {

  var query = eventModel.findById( id ).exec(function( err, result ) {
    if (err) {
      console.error(err.stack);
    }
    else {
      eventer.emit('success', result);
    }
  });

};

/* Get all users
-----------------------------------------------*/
exports.getAll = function() {

  var query = eventModel.find( {} ).exec(function( err, result ) {
    if (err) {
      console.error(err.stack);
    }
    else {
      eventer.emit('success', result);
    }
  });

};

/* Update user
-----------------------------------------------*/
exports.update = function() {

  eventModel.update( { "id" : id}, { "name.last" : "mauhnn" }, { "multi" : true }, function (err) {
    if (err) {
      console.error(err.stack); 
    }
    else {
      eventer.emit('success');
    }
  });

};


/* Delete user
-----------------------------------------------*/
exports.delete = function( target ) {

  eventModel.remove( target, function (err) {
    if (err) {
      console.error(err.stack);
    }
    else {
      eventer.emit('success');
    }
  });
};