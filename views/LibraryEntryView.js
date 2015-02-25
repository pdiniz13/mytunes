// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="playWidth"><button class="playSong"><span class="glyphicon glyphicon-play"></span></button></td> \
                        <td><%= title %>(<%= artist %>)</td> \
                        <td id="controlsWidth"><button class="enqueue" value="Add to Queue"><span class="glyphicon glyphicon-plus"></span></button> \
                            <button class="upvote"><span class="glyphicon glyphicon-thumbs-up"></span></button> \
                            <button class="downvote"><span class="glyphicon glyphicon-thumbs-down"></button></td> \
                        <td><%= votes %></td>'),

  events: {
    'click .playSong': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    },
    'click .upvote': function() {
      this.model.upvote();
    },
    'click .downvote': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});