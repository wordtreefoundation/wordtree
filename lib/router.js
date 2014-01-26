Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

waitOnBooks = function() { return Meteor.subscribe('books'); }
waitOnBookshelves = function() { return Meteor.subscribe('bookshelves'); }

Router.map(function() {
  // this.route('home', {
  //   path: '/'
  // });

  // Books
  
  this.route('bookList', {
    path: '/books',
    waitOn: waitOnBooks
  });

  this.route('bookShow', {
    path: '/books/:_id',
    waitOn: waitOnBooks,
    data: function() {
      return Books.findOne({_id: this.params._id});
    }
  });

  this.route('bookEdit', {
    path: '/books/:_id/edit',
    waitOn: waitOnBooks,
    data: function() {
      return Books.findOne({_id: this.params._id});
    }    
  });

  this.route('bookSubmit', {
    path: '/book/submit',
    waitOn: waitOnBooks
  });

  // Bookshelves

  this.route('bookshelfList', {
    path: '/',
    waitOn: waitOnBookshelves
  });

  this.route('bookshelfShow', {
    path: '/bookshelf/:_id',
    waitOn: function() { return [Meteor.subscribe('books'), Meteor.subscribe('bookshelves')]; },
    data: function() {
      return Bookshelves.findOne({_id: this.params._id});
    }
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

Router.before(function() { clearErrors() });
Router.before(requireLogin, {only: 'bookSubmit'});