var express = require('express');
var todos = require('./todos.json');
var bodyParser = require('body-parser');

var app = express();

//Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.static('public'));

//Routes
app.get('/todos', function(req, res) {
    res.send(todos);
});

app.get('/todos/:id', function(req, res) {
    res.send(todos[req.params.id]);
});

app.post('/todos', function(req, res) {
    todos.push(req.body);
    res.send(todos);
});

app.put('/todos/:id', function(req, res) {
    var pickedTodo = todo.filter(function(number) {
        return number.id === parseInt(req.params.id);
    });
    res.send(todos);
});

app.delete('/todos/:id', function(req, res) {
    var todoById = req.params.id;
    todos.splice(todoById, 1);
    res.send(todos);
});

//Listener function
app.listen(8000, function() {
    console.log('listening on port 8000');
});