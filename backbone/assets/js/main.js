// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  baseRul: '/assets/js',
  paths: {
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    bootstrap: '../bootstrap/js/bootstrap',
    text: 'libs/require/text',
    domready: 'libs/require/domready',
    templates: '../templates'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});
