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
    var i = todos.indexOf(pickedTodo[0]);
    todos[i] = req.body;
    res.send(todos);
});

app.delete('/todos/:id', function(req, res) {
  var pickedTodo = todo.filter(function(number) {
      return number.id === parseInt(req.params.id);
  });
  var i = todos.indexOf(pickedTodo[0]);
  todos.splice(i, 1);
  res.send(todos);
});

//Listener function
app.listen(8000, function() {
    console.log('listening on port 8000');
});
