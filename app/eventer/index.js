/*###############################################
# 
# Events handler
#
###############################################*/

var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var Eventer = function() {
  EventEmitter.call(this);
};
util.inherits(Eventer, EventEmitter);

module.exports = new Eventer();