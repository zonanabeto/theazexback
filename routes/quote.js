const express = require('express');
const router  = express.Router();
const Post = require('../models/Quote');


//lectura
router.get('/list', (req, res, next) => {
    Post.find()
    .then(posts=>{
        res.json(posts);
    })
    .catch(e=>console.log(e))
  });
  
  //read single item(CRUD)
  router.get('/quote/:id',(req,res,next)=>{
      Post.findById(req.params.id)
      .then(post=>{
          res.json(post);
      })
      .catch(e=>console.log(e))
  })
  
  //escritura
  
  router.post('/new',(req,res,next)=>{
      Post.create(req.body)
      .then(post=>{
          res.json(post);
      })
      .catch(e=>console.log(e))
  })
  
  //update
  
  router.patch('/edit/:id',(req,res,next)=>{
      Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then(post=>{
          res.json(post);
      })
      .catch(e=>console.log(e))
  })
  
  //Borrado
  
  router.delete('/delete/:id',(req,res,next)=>{
      Post.findByIdAndRemove(req.params.id, req.body)
      .then(post=>{
          res.json(post);
      })
      .catch(e=>console.log(e))
  })
  
  
  
  
  module.exports = router;