var data = require("./data.json") 
var express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT);


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
