Template.bookSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var book = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };

    Meteor.call('book', book, function(error, id) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('bookShow', {_id: id});
      }
    });
  }
});