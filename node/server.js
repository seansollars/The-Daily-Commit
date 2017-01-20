var http = require('http');
var Mongo = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');

var mongo_url = 'mongodb://localhost:27017/apcsp';

Mongo.connect(mongo_url,function(err,db) {
    if(err) {
        console.log('MongoDB connection error');
    } else {
        console.log('Connected to MongoDB');
    }
});