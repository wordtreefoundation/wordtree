Template.bookEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentBookId = this._id;

    var bookProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    Books.update(currentBookId, {$set: bookProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('bookShow', {_id: currentBookId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this book?")) {
      Books.remove(this._id);
      Router.go('bookList');
    }
  }
});