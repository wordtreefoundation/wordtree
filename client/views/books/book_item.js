Template.bookItem.helpers({
  ownBook: function() {
    return Meteor.userId() && this.userId == Meteor.userId();
  }
});