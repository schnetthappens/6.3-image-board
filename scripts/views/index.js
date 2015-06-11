
export default Backbone.View.extend ({
  template: JST.index,

  initialize: function(){
    this.render;
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
});
