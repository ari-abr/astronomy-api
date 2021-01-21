var data = require("./data.json") 
var express = require("express");
const { query } = require('express');
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

//load   results from  
app.get('/', (req, res) => {
    res.send("It is working");
  });             

    app.get("/all", (req, res) => {
    res.json(data);
   });

   app.get("/planets", (req, res) => {
    res.json(data.planets);
   });

   app.get("/moons", (req, res) => {
    res.json(data.moons);
   });

   app.get("/stars", (req, res) => {
    res.json(data.stars);
   });

   app.get("/exoplanets", (req, res) => {
    res.json(data.exoplanets);
   });


   app.get("/galaxies", (req, res) => {
    res.json(data.galaxies);
   });


   //all bodies in one request
   //
   //meow