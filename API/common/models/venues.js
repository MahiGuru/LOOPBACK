module.exports = function(Venues) {
    // the actual function called by the route to do the work
    /*Venues.includeMethods = function(id, cb) {
        Venues.findById(id, function(err, record) {
            record.updateAttributes({ isPublished: true, publishedDate: new Date() }, function(err, instance) {
                if (err) cb(err);
                if (!err) cb(null, instance);
            })
        })
    };
    Venues.remoteMethod(
        'includeMethods', {
            http: { path: '/menu', verb: 'post' },
            returns: { root: true, type: 'object' },
            description: 'Marks a blog as upvoted.'
        }
    );
*/ 


};