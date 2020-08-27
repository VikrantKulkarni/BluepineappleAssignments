

/*video 23 
introduction to express

var express = require('express');

var introduction = express();

introduction.get('/' , function(req, res) {
 res.send('this is homepage');

});

introduction.get('/contact',function(req, res) {
 res.send('this is contact page');

});

introduction.listen(3000);

*/

/*video 24
dynamic router
var express = require('express');

var introduction = express();

introduction.get('/' , function(req, res) {
 res.send('this is homepage');

});

introduction.get('/contact',function(req, res) {
 res.send('this is contact page');

});

introduction.get('/profile/:id', function(req , res ) {
    res.send('you requested to see the profile with id of' + req.params.id)
});
introduction.listen(3000);

*/


/*video 25
templeting engines
include view folder



var express = require('express');

var introduction = express();

introduction.set('view engine', 'ejs');

introduction.get('/' , function(req, res) {
 res.sendFile(__dirname +'index.html');

});

introduction.get('/contact',function(req, res) {
 res.send('this is contact page');

});

introduction.get('/profile/:name', function(req , res ) {
    var data = {age:29, job:'software engineer'};
    res.render('profile',{person: req.params.name});
});
introduction.listen(3000);

*/