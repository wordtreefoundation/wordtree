Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('postsList', {
    path: '/'
  });

  this.route('postItem', {
    path: '/posts/:_id',
    data: function() {
      return Posts.findOne({_id: this.params._id});
    }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() {
      return Posts.findOne({_id: this.params._id});
    }    
  });

  this.route('postSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if(! Meteor.user()) {
    if(Meteor.loggingIn())
      this.render('loading');
    else
      this.render('accessDenied');
    this.stop();
  }
};

Router.before(requireLogin, {only: 'postSubmit'});