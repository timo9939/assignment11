const express = require('express');
const fs =require('fs');
const path = require('path');
const PORT = 3001;

const htmlRoutes=require('./routes/html-routes.js')
const bodyParser=require('body-parser')
const apiRoutes=require('./routes/api-routes')

const router=require('express').Router()

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json())

app.use(express.static('public'));
app.use('/', htmlRoutes)
app.use('/api',apiRoutes)

router.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

  
 
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
