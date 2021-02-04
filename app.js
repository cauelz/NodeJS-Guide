const http = require('http')
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('dentro do middleware');
  next();
});

app.use((req, res, next) => {
  console.log('dentro de outro middleware');
  res.send('<h1> hello from express </h1>');
});

app.listen(3000);
