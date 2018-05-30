const express = require('express');
const router  = express.Router();
const Entry = require('../models/Entry');
const multer = require('multer');
const uploads = multer({dest:'./public/entries/uploads'})

//lectura
router.get('/list', (req, res, next) => {
  const {query} = req;
  Entry.find(query)
  .then(entries=>{
      res.json(entries);
  })
  .catch(e=>console.log(e))
});

//read single item(CRUD)
router.get('/entry/:id',(req,res,next)=>{
    Entry.findById(req.params.id)
    .then(entry=>{   
        res.json(entry);
        Entry.findByIdAndUpdate(req.params.id, {views:entry.views+=1})
    })
    .catch(e=>console.log(e))
})

//escritura

router.post('/new',uploads.single('cover') ,(req,res,next)=>{
    console.log(req.body)
    if(req.file)req.body.img = '/uploads/' + req.file.filename;
    Entry.create(req.body)
    .then(entry=>{
        res.json(entry);
    })
    .catch(e=>console.log(e))
})

//update

router.patch('/edit/:id',(req,res,next)=>{
    Entry.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(entry=>{
        res.json(entry);
    })
    .catch(e=>console.log(e))
})

//Borrado

router.delete('/delete/:id',(req,res,next)=>{
    Entry.findByIdAndRemove(req.params.id, req.body)
    .then(entry=>{
        res.json(entry);
    })
    .catch(e=>console.log(e))
})




module.exports = router;