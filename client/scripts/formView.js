/* eslint-disable camelcase */
// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),


  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#roommenu').on('input', function () {
      Rooms.changeRoom();
    });

    $('#update').on('click', function () {
      App.fetch();
      console.log('update clicked');
      //???Better way to delay the render?
      setTimeout(MessagesView.render(), 500);
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //console.log(event);
    let date = new Date;
    console.log(JSON.stringify(date));
    let id = (Messages._data[Messages._data.length - 1].message_id);
    console.log(id);
    let messageText = $('#message').val();

    let message = {
      campus: window.CAMPUS,
      created_at: new Date,
      github_handle: 'Chris',
      message_id: id + 1,
      roomname: $('#roommenu').val(),
      text: messageText,
      updated_at: new Date,
      username: 'Eric',
    };

    Parse.create(message);
    App.fetch();
    //???Better way to delay the render?
    setTimeout(MessagesView.render(), 500);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};