// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template('<td><div class="play">(<%= artist %>)</td><td><%= title %></div><button class="dequeue" value="Remove from Queue">Dequeue</button></td>'),

    events: {
        'click .dequeue': function(){
            this.model.dequeue()
        },
        'click .play': function(){
            console.log('this should start playing the queue');
        }
    },

    render: function(){
      return this.$el.html(this.template(this.model.attributes));
    }
  // your code here!
});
