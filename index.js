const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

var server = app.listen(8000,'0.0.0.0', function () {
   var host = server.address().address
   var port = server.address().port
   console.log(`Example app listening at http://%s:%s`, host, port)
})