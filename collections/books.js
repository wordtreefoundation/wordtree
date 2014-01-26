Books = new Meteor.Collection('books');

Books.fields = {
  title:          'title of the book',
  author:         'author(s) of the book',
  publishedYear:  'year the book was published',
  publishedMonth: 'month the book was published (if known)',
  bookshelfIds:   'bookshelves this book is associated with',
  createdAt:      'the date and time the book entry was created',
  bookIds:        'a list of books (ids of books) in the bookshelf'
};

Books.allow({
  insert: ownsDocument,
  update: ownsDocument
});

Books.deny({
  update: function(userId, book, fieldNames) {
    return _.difference(fieldNames, _.keys(Books.fields)).length > 0;
  }
});

Meteor.methods({
  'book': function(bookAttributes) {
    var user = Meteor.user(),
        dup  = Books.findOne({url: bookAttributes.url});

    if (! user)
      throw new Meteor.Error(401, "You need to log in to upload a book.");

    if (! bookAttributes.title)
      throw new Meteor.Error(422, "Please fill in a headline.");

    if (bookAttributes.url && dup)
      throw new Meteor.Error(302, "This link has already been posted.", dup._id);

    var book = _.extend(_.pick(bookAttributes, 'url', 'title', 'message'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var bookId = Books.insert(book);

    return bookId;
  }
});
