Meteor.publish('books', function() {
  return Books.find();
});

Meteor.publish('bookshelves', function() {
  return Bookshelves.find();
});