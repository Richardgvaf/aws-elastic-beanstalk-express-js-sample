const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => res.send('Hello Isennya!'));
app.get('/users',(req,res) => res.send('hello User'))
app.listen(port);
console.log(`App running on http://localhost:${port}`);
