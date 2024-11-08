const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // Gather data as it's received
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // Process data after it's fully received
        req.on('end', () => {
            // Parse form data
            const parsedData = new URLSearchParams(body);
            const formData = {};

            for (const [key, value] of parsedData) {
                formData[key] = value;
            }

            console.log('Form Data:', formData);  // Log the form data for verification

            // Respond to client
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h2>Form submitted successfully!</h2>');
            res.write('<p>Received Data:</p>');
            res.write('<pre>' + JSON.stringify(formData, null, 2) + '</pre>');
            res.end();
        });
    } else {
        // Handle other requests (e.g., GET)
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
