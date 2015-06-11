import {ImageCollection} from '/models/image';
import IndexView from '/views/index';

var Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'post': 'post',
  },

  initialize: function() {
    this.images = new ImageCollection();
  },

  index: function() {
    var view = new IndexView({collection: this.images});
    $('.content-container').html(view.el);
    this.images.fetch();
    // console.log(this.images);
  }
});

var router = new Router();

export default router;
