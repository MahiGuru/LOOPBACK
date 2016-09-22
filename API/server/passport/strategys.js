module.exports = function(passport, app) {
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
        GitHubStrategy = require('passport-github2').Strategy,
        FacebookStrategy = require('passport-facebook').Strategy,
        TwitterStrategy = require('passport-twitter').Strategy,
        LocalStrategy = require('passport-local').Strategy;


    var configAuth = require("./auth.js");

    var User = app.models.Customer;

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("SERIALIZE ", user);
        done(null, user.id);
    });
    configAuth = configAuth();
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        console.log("DE-SERIALIZE ", id);
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });



    /*********
     *  GOOGLE STRATEGY
     * 
     */
    passport.use(new GoogleStrategy({
            clientID: configAuth.google.clientID,
            clientSecret: configAuth.google.clientSecret,
            callbackURL: configAuth.google.callback
        },
        function(token, tokenSecret, profile, done) {
            console.log("GOOGLE ", profile.id);
            User.findOrCreate({ googleId: profile.id, email: profile.emails[0].value, provider: profile.provider, name: profile.displayName, userPic: profile.photos[0].value }, function(err, user) {
                return done(err, user);
            });
        }
    ));

    /*********
     *  GITHUB STRATEGY
     * 
     */
    passport.use(new GitHubStrategy({
            clientID: configAuth.github.clientID,
            clientSecret: configAuth.github.clientSecret,
            callbackURL: configAuth.github.callback
        },
        function(accessToken, refreshToken, profile, done) {
            console.log("GITHUB ", profile.id);
            User.findOrCreate({
                githubId: profile.id,
                name: profile.displayName,
                username: profile.username,
                url: profile.profileUrl,
                provider: profile.provider,
                avatar: profile._json.avatar_url
            }, function(err, user) {
                console.log(user);
                return done(err, user);
            });
        }
    ));

    /*********
     *  FACEBOOK STRATEGY
     * 
     */
    passport.use(new FacebookStrategy({
            clientID: configAuth.facebook.clientID,
            clientSecret: configAuth.facebook.clientSecret,
            callbackURL: configAuth.facebook.callback,
            enableProof: true
        },
        function(accessToken, refreshToken, profile, done) {
            console.log("FACEBOOK ", profile.id);
            User.findOrCreate({ facebookId: profile.id }, function(err, user) {
                if (err) {
                    return done(err, user);
                }
                console.log(user);
                return done(null, user);
            });
            return done(null, profile);
        }
    ));

    /*********
     *  TWITTER STRATEGY
     * 
     */
    passport.use(new TwitterStrategy({
            consumerKey: configAuth.twitter.clientID,
            consumerSecret: configAuth.twitter.clientSecret,
            callbackURL: configAuth.twitter.callback
        },
        function(token, tokenSecret, profile, done) {
            console.log("TWITTER ", profile.id);
            User.findOrCreate({ twitterId: profile.id }, function(err, user) {
                if (err) {
                    return done(err);
                }
                return done(null, user);
            });
        }
    ));

}