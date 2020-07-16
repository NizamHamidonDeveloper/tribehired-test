const express = require('express');
const router = express.Router();

const axios = require('axios')

const postAPI = 'https://jsonplaceholder.typicode.com';


router.get('/posts', (req, res) =>{
    axios.get(`${postAPI}/posts`).then(posts =>{
        res.status(200).json(posts.data)
    }).catch(error =>{
        res.status(500).send(error)
    })
});

router.get('/posts/:id', (req, res) =>{
    const id  = req.params.id;
    axios.get(`${postAPI}/posts/${id}`).then(posts =>{
        res.status(200).json(posts.data)
    }).catch(error =>{
        res.status(500).send(error)
    })
});

router.get('/comments/:id', (req, res) =>{
    console.log("request", req.params.id);
    const id  = req.params.id;
    axios.get(`${postAPI}/comments?postId=${id}`).then(posts =>{        
        res.status(200).json(posts.data)
    }).catch(error =>{
        res.status(500).send(error)
    })
});



module.exports = router