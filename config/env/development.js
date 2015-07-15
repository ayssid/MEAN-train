/**
 * Created by atc on 06-Jul-15.
 */

module.exports = {
    sessionSecret : 'developmentSessionSecret',
    db : 'mongodb://localhost/mean-book',
    facebook : {
        clientID: '1594123650858462',
        clientSecret: '130f6a29ca1250c95de1249e05b79d2f',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter : {
        clientID: 'BOTf0qOwuCzMt5m9ueMBcAIlI',
        clientSecret: 'kv8IS6HGoeweJaryPIW1UCasoqbIV7xXN0rQKB2SlGkm0hABrt',
        callbackURL: 'http://127.0.0.1:3000/oauth/twitter/callback'
    }
};