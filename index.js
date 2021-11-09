const express = require('express');
const app = express();
const port = 80;
app.get('/', (req, res, next) => {res.send('reply from server\n')});
app.listen(port, (err) => {console.log(`Server listen on port ${port}`)});