const express = require('express');
const path = require('path');

const server = express();

const PORT = process.env.PORT || 3000;

server.use('/', express.static(
  path.resolve(__dirname, 'dist/')
))

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

server.listen(PORT, (err) => {
  if (err) throw err;

  console.log('server listening on port, ', PORT);
})