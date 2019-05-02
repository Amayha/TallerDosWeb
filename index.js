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

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);

    const productos = db.collection('productos');

    productos.find({}, {sort: ['precio']}).toArray(function(err, docs){
        assert.equal(null, err);
        console.log('encontramos los docs');
        docs.forEach(function(prod){
            //console.log(prod.precio);
        })

    });
  
    client.close();
  });



var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
    response.render('tienda');
});

console.log("Servidor iniciado...");
app.listen(3000);