var bookshelfId, book1, book2;

if (Bookshelves.find().count() == 0) {
  bookshelfId = Bookshelves.insert({
    name:              'Public (archive.org)',
    ownerGroupId:      null,
    ownerUserId:       null,
    createdAt:         new Date().getTime()
  });
}

if (Books.find().count() == 0) {
  book1 = Books.insert({
    "title": "Duane and Chris Learn Meteor",
    "author": "Duane Johnson, Chris Johnson",
    "publishedYear": 2014,
    "bookshelfIds": [bookshelfId]
  });

  book2 = Books.insert({
    "title": "Meteor",
    "author": "Tom Coleman",
    "publishedYear": 2013,
    "bookshelfIds": [bookshelfId]
  });
} else {
  book1 = Books.findOne({title: "Duane and Chris Learn Meteor"});
  book2 = Books.findOne({title: "Meteor"});
}

Bookshelves.update(bookshelfId, {$set: {bookIds: [book1, book2]}});