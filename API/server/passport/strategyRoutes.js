module.exports = function(app, passport) {
    //GOOGLE ROUTES
    app.get('/auth/google',
        passport.authenticate('google', { scope: 'email' }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/',
            failureFlash: true
        }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/#/menu');
        });

    //GITHUB ROUTES
    app.get('/auth/github',
        passport.authenticate('github', { scope: ['user:email'] }));

    app.get('/auth/github/callback',
        passport.authenticate('github', {
            failureRedirect: '/',
            failureFlash: true
        }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/#/menu');
        });

    //Facebook ROUTES
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['publish_actions'] }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/',
            failureFlash: true
        }, function(req, res) {
            // Successful authentication, redirect home.
            res.redirect("/#/menu");
        }));

    //TWITTER ROUTES
    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            failureRedirect: '/login',
            failureFlash: true
        }, function(req, res) {
            // Successful authentication, redirect home.
            res.redirect("/#/menu");
        }));


}