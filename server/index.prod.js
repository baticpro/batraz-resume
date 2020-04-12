const express = require('express');
const app = express();

app.use(express.static('public/dist'));

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, './public/dist/index.html'))
);

app.listen(3000, function () {
  console.log('App running on the http://localhost:3000!');
});
