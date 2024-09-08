const express = require('express')
const app = express()
const path = require('path');
const port = 3000


app.get('/go', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });

app.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hello World! 5868')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/services', (req, res) => {
    res.send('our services')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})