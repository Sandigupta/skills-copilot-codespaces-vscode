


// Create web server
const express = require('express');
const app = express();

// Use the JSON body parser
app.use(express.json());

// Create a variable to store the comments
const comments = [];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start the web server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});


// git add comments.js


