// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName:'div',

  initialize: function() {
    this.render();
    this.collection.on('all', function(){
      this.render();
    }, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
