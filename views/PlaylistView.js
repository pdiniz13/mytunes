/**
 * Created by ppp on 2/19/2015.
 */
var PlaylistView = Backbone.View.extend({
  initialize: function(){
    this.render();

    this.collection.on('all', function(){
      this.render();
    }, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>PlayLists</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }


});