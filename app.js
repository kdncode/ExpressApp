var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send('hi');
});


// Ejs template
app.get('/dogs', (req, res) => {
    res.render('home.ejs');
});

// Connect EJS to server
app.get('/ilike/:thing', (req, res) => {
    var thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing})
});


// Use Loop 
app.get('/posts', (req, res) => {
    var posts = [
        { title: "Harry", author: "King"},
        { title: "Porter", author: "Queen"},
        { title: "Mama", author: "Papa"}
    ]
    
    res.render('posts.ejs', {posts: posts})
})


// Routes
app.get('/r/:id', (req, res) => {
    var id = req.params.id;
    res.send('Hello ' + id);
})


// Mutiple Routes
app.get('/r/:sub/comments/:id/:title', (req, res) => {
    console.log(req.params);
    res.send('hello comments')
})


// 404 
app.get('*', (req, res) => {
    res.send('You have lost');
});


// Server
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server is running')
});