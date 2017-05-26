var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':'+ configValues.pwd + '@ds113650.mlab.com:13650/iotnodes';
    }
    
}