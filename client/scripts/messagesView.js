// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function(room) {
    // TODO: Render _all_ the messages.
    room = Rooms.currentRoom;
    $('#chats').html('');
    let html = '';
    for (let message of Messages._data) {
      if (room && message.roomname === room) {
        html += MessageView.render(message);
      } else if (!room) {
        html += MessageView.render(message);
      }
    }
    $('#chats').append(html);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    $('#chats').append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};