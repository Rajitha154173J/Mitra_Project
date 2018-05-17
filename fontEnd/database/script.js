var express = require('express');
var mysql = require('mysql');

var connect = mysql.createConnection({
    //properties...
    host:'localhost',
    user:'root',
    password:'',
    database:'projectdatabase'
});

connection.connect(function(error){
    if(!!error){
        console.log('error');
    }else{
        console.log('connected');
    }
});

app.get('/',function(req, resp){
    //about mysql
    connection.query("SELECT * FROM test1",function(error,rows, fields)
 if(!!error){
     console.log('error in query');
 }else{
     console.log('successful query');
 }
}
})

app.listen(1337);