/*###############################################
# 
# HBS configs (partials, helpers)
#
###############################################*/

module.exports = function( ) {

  // Views partials setup
  var hbs = require('hbs'),
      fs  = require('fs');

  // Common partials
  hbs.registerPartial('includes.header', fs.readFileSync('app/view/includes/header.hbs', 'utf8'));
  hbs.registerPartial('includes.footer', fs.readFileSync('app/view/includes/footer.hbs', 'utf8'));

  // Helpers
  var blocks = {};

  hbs.registerHelper('partial', function(name, context) {
    var block = blocks[name];
    if (!block) {
      block = blocks[name] = [];
    }

    block.push(context.fn(this));
  });

  hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');
    blocks[name] = [];
    return val;
  });

};