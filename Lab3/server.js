// Import required modules
const connect = require('connect');
const http = require('http');
const url = require('url');

// Create a Connect app
const app = connect();

// Function to calculate
function calculate(req, res) {
    const q = url.parse(req.url, true).query;
    const method = q.method;
    const x = Number(q.x);
    const y = Number(q.y);
    let result;
    let operator;

    switch (method) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            result = x / y;
            operator = '/';
            break;
        default:
            res.end('Error: Unknown method');
            return;
    }

    res.end(`${x} ${operator} ${y} = ${result}`);
}

// Add the calculate function as middleware
app.use(calculate);

// Start server
http.createServer(app).listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
