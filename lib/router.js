Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('books'); }
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  
  this.route('bookList', {
    path: '/books'
  });

  this.route('bookShow', {
    path: '/books/:_id',
    data: function() {
      return Books.findOne({_id: this.params._id});
    }
  });

  this.route('bookEdit', {
    path: '/books/:_id/edit',
    data: function() {
      return Books.findOne({_id: this.params._id});
    }    
  });

  this.route('bookSubmit', {
    path: '/book/submit'
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

Router.before(requireLogin, {only: 'bookSubmit'});