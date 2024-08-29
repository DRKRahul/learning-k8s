const express = require('express');
const app = express();

// Define a route for the home page
app.get('/hello', (req, res) => {
    res.send('Welcome to the Simple Express App!');
});

// Define a route for the about page
app.get('/health', (req, res) => {
    res.send('This app is working fine').status(200);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
