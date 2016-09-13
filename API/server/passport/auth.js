module.exports = function() {
    return {
        facebook: {
            clientID: "490183321426",
            clientSecret: "490183321426",
            callback: "http://localhost:3000/auth/facebook/callback"
        },
        google: {
            clientID: "490183321426-drubgh4mb5aljcs121sur9gn9c4qmn2p.apps.googleusercontent.com",
            clientSecret: "c-PWFr_gO8pWU1tve1ZFuXWt",
            callback: "http://localhost:3000/auth/google/callback"
        },
        twitter: {
            clientID: "490183321426",
            clientSecret: "490183321426",
            callback: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: "2afeea90a7c6a0fe169d",
            clientSecret: "20231e8442b5ab0e445b13834cc2852fd1e2052d",
            callback: "http://localhost:3000/auth/github/callback"
        }

    }
}