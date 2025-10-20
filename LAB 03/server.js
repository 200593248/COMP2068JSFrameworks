// server.js
// Lab 3 - Simple Math Server using Connect
// Author: Jacob Sleeba
// Date: 2025-10-19

// Import required modules
import connect from 'connect';
import url from 'url';

// Create a connect app
const app = connect();

// Define the calculate function
function calculate(req, res) {
  // Parse the URL and query parameters
  const query = url.parse(req.url, true).query;

  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

  let result;
  let operator;

  // Determine which operation to perform
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
      result = y !== 0 ? x / y : 'Error (division by zero)';
      operator = '/';
      break;
    default:
      res.end('Error: Invalid method. Use add, subtract, multiply, or divide.');
      return;
  }

  // Display the result
  res.end(`${x} ${operator} ${y} = ${result}`);
}

// Mount the calculate function at the /lab2 path
app.use('/lab03', calculate);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/lab03');
});
