const express = require ('express');
const mongoose = require('mongoose');
require("dotenv/config");
mongoose.connect(
process.env.MONGO_URL,
() => {
    console.log ('you are connected');
}
);




const app = express();
app.use('/', require('./Routes/useRoute.js'))
const port = 3001;
app.listen(port , ()=> console.log('running server' + port));