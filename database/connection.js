const mySql = require('mysql');

const connection = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'onlineAuctoin'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Connected successfully');
})

module.exports = {
    connection
}