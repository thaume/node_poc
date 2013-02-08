/*###############################################
# 
# User model
#
###############################################*/

var mongoose = require('mongoose');

/* Create user's mongoose schema
-----------------------------------------------*/
var userSchema = new mongoose.Schema({
  event: {
    title: String,
    organiser: { 
      name: String, 
      current_position: String
    },
    details: {
      category: String,
      adress: String,
      start_day: String,
      start_hour: String,
      end_day: String,
      end_hour: String
    }
  }
});

/* Create user's mongoose model
-----------------------------------------------*/
var PUser = mongoose.model('PowerUsers', userSchema);

/* Clean out old data !!!! development mode
-----------------------------------------------*/
/*PUser.remove({}, function(err) {
  if (err) {
    console.log ('error deleting old data.');
  }
});//*/

/* Export PUser model
-----------------------------------------------*/
module.exports = PUser;