Template.bookshelfShow.helpers({
  books: function() {
    return Books.find({bookshelfIds: this._id});
  }
});