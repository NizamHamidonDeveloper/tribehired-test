const express = require('express');
const path = require('path')
const app = express();

const posts = require('./server/routes/posts')

app.use(express.static(path.join(__dirname, 'dist/tribehired-project')));

app.use('/', posts);

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/tribehired-project/index.html'))
})

const port = process.env.PORT || 4600


app.listen(port, (req, res) =>{
    console.log(`RUNNING on port ${port}`);
    
})