// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName:'table',

  className: 'songQueue',

  initialize: function() {
    this.render();

    this.collection.on('all', function(){
      this.render();
    }, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<tr><th colspan="3">Song Queue</th></tr><th>Play</th><th>Song</th><th>Remove</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
