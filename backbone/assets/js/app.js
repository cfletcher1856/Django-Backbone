// Filename: app.js
define([
  'jquery',
  'underscore',
  'router', // Request router.js
], function($, _, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
