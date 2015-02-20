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

    this.$el.html('<tr><th colspan="3">Song Queue</th></tr><th>Play</th><th>Song</th><th>Remove</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }


});