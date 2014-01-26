if (Posts.find().count() == 0) {
  Posts.insert({
    "title": "Duane and Chris Learn Meteor",
    "author": "Duane Johnson, Chris Johnson",
    "url": "http://dclm.meteor.com/"
  });

  Posts.insert({
    "title": "Meteor",
    "author": "Tom Coleman",
    "url": "http://meteor.com"
  });
}