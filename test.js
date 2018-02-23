const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

fs.readFile('index.html', (err, html) =>{
	if(err){
		throw err;
	}

const server = http.createServer((req, res) => {
	res.statusCode = 200; //if dont use the fs function
	//res.setHeader('Content-type', 'text/plain');
	//res.end('Hello There!'); 
	res.setHeader('Content-type', 'text/html');
	res.write(html);
	res.end();
});

server.listen(port,hostname,() =>{
	console.log('Server Started on port ' +port);
});

	});
