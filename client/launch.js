/**
 * Created by ppp on 2/18/2015.
 */
$(document).ready(function(){
  //collection of songs
  window.library = new Songs(songData);

  window.app = new AppModel({library: library});

  // build a view for the top level of the whole app
  window.appView = new AppView({model: app});

  // put the view onto the screen
  $('body').append(appView.render());

});