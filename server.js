var express = require('express');
var chats = require('express')();
var http = require('http').Server(chats);
var io = require('socket.io')(http);

chats.get('/', function(req, res){
  res.sendFile(__dirname + '/public/http/');
});
chats.use('/assets', express.static(__dirname+'/public'));
io.on('connection', function(socket){
  socket.on('message1', function(msg){
    io.emit('message1', msg);
  });
  socket.on('message2', function(msgs, ms){
    io.emit('message2', msgs, ms);
  });
});

http.listen(3000, function(){
  console.log('starting push server');
});
