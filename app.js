const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require("morgan");

const app = express();

const auctionRouter = require('./services/auction/routes/index');
const authRouter = require('./services/auth/routes/index');

app.set('view engine', "jade");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

// ToDo

app.use('/auction',auctionRouter);
app.use('/auth',authRouter);

app.use((req,res,next)=>{
    next(createError(404));
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
})

// module.exports = app


server.listen(PORT,()=>{
    console.log("Listening on port",PORT);
})