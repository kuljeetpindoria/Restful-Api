const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app')
const hostname = '0.0.0.0'


const server = http.createServer(app);


server.listen(port, hostname, () => {
    console.log('app is running...')
})