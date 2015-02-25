// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template('<td><button class="playInQueue"><span class="glyphicon glyphicon-play"></span></button></td> \
                        <td><%= title %>(<%= artist %>)</td> \
                        <td><button class="dequeue" value="Remove from Queue"><span class="glyphicon glyphicon-eject"></span></button></td>'),

    events: {
        'click .dequeue': function(){
            this.model.dequeue()
        },
        'click .playInQueue': function(){
            this.model.play();
        }
    },

    render: function(){
      return this.$el.html(this.template(this.model.attributes));
    }
  // your code here!
});