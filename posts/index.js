const express = require('express');
const { randomBytes } = require('crypto');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json())

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,title
    }

    res.send(posts[id])
})

app.listen(4000, () => {
    console.log('Listening on 4000');
})