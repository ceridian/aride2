// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
      'clientID': '823815004333682', // your App ID
      'clientSecret': '0b8079f21fe75677da03054f8a89d12e', // your App Secret
      'callbackURL': 'http://192.168.1.175/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
