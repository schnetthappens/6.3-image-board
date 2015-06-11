import {ImageCollection} from '/models/image';

var Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'post': 'post',
  },

  initialize: function() {
    this.images = new ImageCollection();
    this.images.fetch();
    console.log(this.images);
  },

  // index: function() {
  //   // console.log(images);
  // },
  //
  // post: function() {
  //   console.log('this is the create screen');
  // }

});

var router = new Router();

export default router;
