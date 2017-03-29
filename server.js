
var express = require('express');
var todos = require('./todos.json');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('stuff'));

console.log(todos);

app.get('/todos', function (req, res) {
  res.send(todos);
});
app.get('/todos/:id', function(req, res) {
var pickedTodo = todo.filter(function(number) {
console.log(req.param.id);
return number.id === req.params.id;
});
res.send(todos);
});

app.listen(8000, function() {
  console.log('listening on port 8000');
});
