var express = require('express');
var exphbs = require('express-handlebars');


var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'peluditos';
// Create a new MongoClient
const client = new MongoClient(url);

var db = null;

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);

    //client.close();
});

var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function (request, response) {
    var contexto = {
        titulo: 'Página principal',
    };
    response.render('home', contexto);
});


app.get('/tienda/:categoria?', function (request, response) {

var query = {};
if (request.params.categoria){
    query.categoria = request.params.categoria;
}

    var collection = db.collection('productos');

    // Find some documents
    collection.find(query).toArray(function (err, docs) {
        assert.equal(err, null);

        var contexto = {
            productos: docs,
            categoria: request.params.categoria
        };
        response.render('tienda', contexto);
    });

});

console.log("Servidor iniciado...");
app.listen(3000);