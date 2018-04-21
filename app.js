var express = require('express');
var app = express();



app.get('*', (req, res) => {
    res.send('You have lost');
});

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/dogs', (req, res) => {
    console.log('Someone is hacking')
    res.send('dogs')
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server is running')
});