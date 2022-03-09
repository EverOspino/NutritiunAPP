const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const { app } = require("./app");
const routes = require('./routes')

dotenv.config();
// require('./config/database.config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/', routes());

app.listen(process.env.PORT,()=>{
    console.log("Server listen on ",  process.env.PORT);
})