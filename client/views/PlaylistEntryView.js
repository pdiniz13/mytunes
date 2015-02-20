/**
 * Created by ppp on 2/19/2015.
 */
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>Playlist Example <button class="loadPlaylist">Load</button></td>'),

  events: {
    'click .loadPlaylist': function(){
      console.log('loading playlists not implemented yet', this.model);
      this.model.load();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});