// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('playlists', new Playlists());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    params.library.on('dequeue', function(song){
      this.get('songQueue').shift();
    }, this);

    params.library.on('ended', function (song){

      this.get('songQueue').at(1).play();
      song.dequeue();

    }, this);

    params.library.on('upvote', function (song){
      var newCount = song.get('votes') + 1;
      song.set('votes', newCount);
    }, this);

    params.library.on('downvote', function (song){
      var newCount = song.get('votes') - 1;
      song.set('votes', newCount);
    }, this);

    this.get('songQueue').on('savePlayList', function (songQueue){
      var playlistModel = new PlaylistModel({songQueue: songQueue});
      this.get('playlists').add(playlistModel);
    }, this);

    this.get('playlists').on('loadPlaylist', function (songs){
      this.set('currentSong', null);
      this.get('songQueue').reset(songs);
      this.get('songQueue').at(0).play();
    }, this);
  }

});
