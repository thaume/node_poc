/*###############################################
# 
# Connection to database
#
###############################################*/


var mongoose = require('mongoose'),
    //uristring = 'mongodb://root:16dd0a3c806a10b0ee2076b20241fb62@localhost/test',
    uristring = 'mongodb://tomTest:tomTest@linus.mongohq.com:10016/node',
    mongoOptions = { db: { safe: true } };

// Connection
mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});