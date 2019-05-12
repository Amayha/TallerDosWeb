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
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function (request, response) {
    var contexto = {
        titulo: 'Página principal',
    };
    response.render('home', contexto);
});

app.get('/forma', function (request, response) {
    var contexto = {
        titulo: 'Forma',
    };
    response.render('forma', contexto);
});


app.get('/tienda/:categoria?', function (request, response) {

    var query = {};
    //variables de control de los switch
    var macho = false;
    var hembra = false;
    var gato = false;
    var perro = false;

    if (request.params.categoria) {
        query.categoria = request.params.categoria;
        switch (query.categoria) {
            case 'macho':
                macho=true;
                break;
            case 'hembra':
                hembra = true;
                break;
            case 'perro':
                perro = true;
                break;
            case 'gato':
                gato=true;
                break;
        }
    }

    if (request.query.precio) {
        query.precio = { $lte: request.query.precio };
    }

    var collection = db.collection('productos');

    // Find some documents
    collection.find(query).toArray(function (err, docs) {
        assert.equal(err, null);

        var contexto = {
            productos: docs,
            categoria: request.params.categoria,
            macho: macho,
            hembra: hembra,
            perro: perro,
            gato: gato

            // precio : request.params.categoria
        };
        response.render('tienda', contexto);
    });

});

// la pagina del producto escogido en la tienda
app.get('/tienda/producto/:nombre', function (request, response) {

    var query = {};

    if (request.params.nombre) {
        query.nombre = request.params.nombre;
    }

    var collection = db.collection('productos');
    collection.find( query ).toArray(function (err, docs) {
        assert.equal(err, null);
        
        var contexto = {
            producto: docs[0]
        }

        response.render('producto', contexto);
    });

});


console.log("Servidor iniciado...");
app.listen(3000);