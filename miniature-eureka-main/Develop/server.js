const express = require('express');
const fs =require('fs');
const path = require('path');
const PORT = 3001;

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => {
    // Send a message to the client
    res.json(`${req.method} request received to get reviews`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);
  });
  
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
