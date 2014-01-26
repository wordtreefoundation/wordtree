Posts = new Meteor.Collection('posts');
Posts.allow({
  insert: ownsDocument,
  update: ownsDocument
});
Posts.deny({
  update: function(userId, post, fieldNames) {
    return _.without(fieldNames, 'url', 'title', 'message').length > 0;
  }
});

Meteor.methods({
  'post': function(postAttributes) {
    var user = Meteor.user(),
        dup  = Posts.findOne({url: postAttributes.url});

    if (! user)
      throw new Meteor.Error(401, "You need to log in to post new stories.");

    if (! postAttributes.title)
      throw new Meteor.Error(422, "Please fill in a headline.");

    if (postAttributes.url && dup)
      throw new Meteor.Error(302, "This link has already been posted.", dup._id);

    var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var postId = Posts.insert(post);

    return postId;
  }
});