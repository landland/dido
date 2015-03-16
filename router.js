Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('hello');
});
Router.route('profile', function() {
    this.render('profile');
});
