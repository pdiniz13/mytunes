var PlaylistModel = Backbone.Model.extend({
  //really it just contains a songQueue Object;
  initialize: function(params){
    var songs = params.songQueue.models.slice();
    this.set('songs', songs);
  },

  load: function(){
    var songs = this.get('songs');
    this.trigger('loadPlaylist', songs);
  }
});