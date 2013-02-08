/*###############################################
# 
# User model
#
###############################################*/

var mongoose = require('mongoose');

/* Create user's mongoose schema
-----------------------------------------------*/
var eventSchema = new mongoose.Schema({
  event: {
    title: String,
    organiser: { 
      name: String, 
      currentPosition: String
    },
    details: {
      description: String,
      category: String,
      adress: String,
      startDay: String,
      startHour: String,
      endDay: String,
      endHour: String
    }
  }
});

/* Create user's mongoose model
-----------------------------------------------*/
var viadeoEvent = mongoose.model('ViadeoEvents', eventSchema);

/* Clean out old data !!!! development mode
-----------------------------------------------*/
/*PUser.remove({}, function(err) {
  if (err) {
    console.log ('error deleting old data.');
  }
});//*/

/* Export PUser model
-----------------------------------------------*/
module.exports = viadeoEvent;