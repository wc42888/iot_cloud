var IOTs = require('../models/IOTModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.get('/api/iots/:uname', function(req, res) {
        IOTs.find({username: req.params.uname}, function(err, IOTs) {
            if (err) throw err;
            res.send(IOTs);
        });
    });
    app.get('/api/iot/:id', function(req, res) {
        IOTs.findById({_id: req.params.id}, function(err, IOT) {
            if (err) throw err;
            res.send(IOT);
        });
    });    
    app.post('/api/iot', function(req, res){
        if (req.body.id) {
            IOTs.findByIdAndUpdate(req.body.id, {
                iot: req.body.iot,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if (err) throw err;
                res.send('Success');
            });
        } else {
            var newIOT = IOTs({
                username: 'test',
                iot: req.body.iot,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newIOT.save(function(err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });
    app.delete('/api/iot', function(req, res){
        IOTs.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        });
    });
}
