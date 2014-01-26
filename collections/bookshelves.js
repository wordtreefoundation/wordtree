Bookshelves = new Meteor.Collection('bookshelves');

Bookshelves.fields = {
  name:                'the name of the bookshelf',
  ownerGroupId:        'the Group that owns the bookshelf (if any)',
  ownerUserId:         'the User that owns the bookshelf (if any)',
  createdAt:           'the date and time the bookshelf was created at',
  bookIds:             'a list of books (ids of books) in the bookshelf'
  // parentBookshelfId:   'the bookshelf id of the parent (if any)',
  // transformation:      'the type of transformation that occurred from parent to child'
};

Bookshelves.allow({
  insert: ownsDocument,
  update: ownsDocument
});

Bookshelves.deny({
  update: function(userId, bookshelf, fieldNames) {
    return _.difference(fieldNames, _.keys(Bookshelves.fields)).length > 0;
  }
});
