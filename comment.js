// Create web server
// Import the required modules
const http = require('http');

// Define the host and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP response header with status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response message
  res.end('Hello, World! This is a basic web server.');
});

// Start the server and listen on the specified port and host
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

