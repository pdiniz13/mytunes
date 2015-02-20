/**
 * Created by ppp on 2/19/2015.
 */
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><button class="playInQueue"><span class="glyphicon glyphicon-play"></span></button></td> \
                        <td><%= title %>(<%= artist %>)</td> \
                        <td><button class="dequeue" value="Remove from Queue"><span class="glyphicon glyphicon-eject"></span></button></td>'),

  events: {
    'click .loadPlaylist': function(){
      this.model.dequeue()
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});