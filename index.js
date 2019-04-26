var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
    response.render('tienda');
});

console.log("Servidor iniciado...");
app.listen(3000);