/**
 * Created by atc on 06-Jul-15.
 */

exports.render = function(req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello World',
        userFullName: req.user ? req.userFullName : ''
    });
}