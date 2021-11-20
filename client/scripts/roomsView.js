// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    let html = '';
    for (let room of Rooms._data) {
      console.log(room);
      html += Rooms.render(room);
    }
    $('#roommenu').append(html);

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //rendermessages
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // Clear the chats div
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
