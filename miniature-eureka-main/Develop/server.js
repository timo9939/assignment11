const express = require('express');
const fs =require('fs');
const path = require('path');
const PORT = 3001;
const router=express.Router()
const htmlRoutes=require('./routes/html-routes.js')
const bodyParser=require('body-parser')
const apiRoutes=require('./routes/api-routes')

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json())

app.use(express.static('public'));
app.use('/', htmlRoutes)
app.use('/api',apiRoutes)

  
  app.use('/', router)
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
