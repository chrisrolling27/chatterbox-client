// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  currentRoom: 'lobby',

  updateRooms: function () {
    for (let message of Messages._data) {
      if (!this._data.filter((room) => { return room.roomname === message.roomname; }).length > 0) {
        let newRoom = {roomname: message.roomname};
        this._data.push(newRoom);
      }
    }
  },

  changeRoom: function () {
    this.currentRoom = $('#roommenu').val();
    MessagesView.render();
  },

  render: _.template(`
    <option value="<%= roomname%>"><%= roomname%></option>
`)

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};