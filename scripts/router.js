
var Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'create': 'create',
  },

  index: function() {
    console.log('this is the index');
  },

  create: function() {
    console.log('this is the create screen');
  }

});

var router = new Router();

export default router;
