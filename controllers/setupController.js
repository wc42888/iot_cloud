var IOTs = require('../models/IOTModel');

module.exports = function(app) {
    
   app.get('/api/setupIOTs', function(req, res) {
       
       // seed database
       var starterIOTs = [
           {
               username: 'test',
               iot: 'study nodejs',
               isDone: false,
               hasAttachment: false
           }
       ];
       IOTs.create(starterIOTs, function(err, results) {
           res.send(results);
       }); 
   });
    
}
