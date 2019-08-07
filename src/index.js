import 'dotenv/config';
import cors from 'cors';
 
import express from 'express';
const fs = require('fs');
const path = require('path');

 import models from './models';
//import routes from './routes';
const routes = require('./routes.js');
const middlewares = require('./middlewares');

const app = express();
 
// Application-Level Middleware
 
app.use(cors());

app.use(middlewares); 

// Application-Level Router
app.use(routes);
 
   
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

 