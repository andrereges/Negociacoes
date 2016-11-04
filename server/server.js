var http = require('http')
    ,app = require('./config/express');

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

http.createServer(app).listen(server_port, server_ip_address, function() {
    console.log('Servidor estutando em: \n'+server_ip_address+':'+server_port);
});

