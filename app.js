var express = require('express');
var app = express();


// Go to public folder
app.use(express.static('public'))


// Run file with ejs extension
app.set('view engine', 'ejs')


// Ejs template
app.get('/', (req, res) => {
    res.render('home');
});

// Connect EJS to server
app.get('/ilike/:thing', (req, res) => {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing})
});


// Use Loop 
app.get('/posts', (req, res) => {
    var posts = [
        { title: "Harry", author: "King"},
        { title: "Porter", author: "Queen"},
        { title: "Mama", author: "Papa"}
    ]
    
    res.render('posts', {posts: posts})
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