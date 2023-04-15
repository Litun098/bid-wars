const app = require('../app');
const http = require('http');

const PORT = process.env.PORT || 3000;

app.set('port',PORT);

server.listen(PORT,()=>{
    console.log("Listening on port",PORT);
})