if (Books.find().count() == 0) {
  Books.insert({
    "title": "Duane and Chris Learn Meteor",
    "author": "Duane Johnson, Chris Johnson",
    "url": "http://dclm.meteor.com/"
  });

  Books.insert({
    "title": "Meteor",
    "author": "Tom Coleman",
    "url": "http://meteor.com"
  });
}