const express = require('express');
const app = express();
const birds = require('./routes/birds')
const dogs = require('./routes/dogs')
const port=8088

app.set('views', __dirname + '/vues');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use("/birds",birds)
app.use("/dogs",dogs)

app.listen(port,() => console.log(port))