const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const passport = require("passport");
const multer = require('multer');
const uploads = multer({dest:'./public/users/uploads'})

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()) return next();
    res.status(403);
    res.send("No eres bienvenido");
}

// router.post('/signup', 
//     (req,res)=>{
//         User.register(req.body, req.body.password, function(err, user) {
//             if (err) return res.send(err);
//             passport.authenticate('local')(req,res,function(){
//                 res.send('funciono')
//             })
//             //return user
//         })
// });


// router.post('/login', passport.authenticate('local',{
//     successRedirect:'/'
// }))



router.post('/login', passport.authenticate('local'),(req,res,next)=>{
       res.json(req.user);

})

router.post('/signup', (req,res)=>{
    if(req.file)req.body.avatar = '/uploads/' + req.file.filename;
    User.register(req.body, req.body.password , (err,user)=>{
        if(err) return res.json(err);
        res.json(user);
    })
})

router.get('/logout',(req,res)=>{
    req.logout();
    res.status(200);
    res.json({message:'bye te acabas de loguear fuera'});
})

router.get('/profile', isAuthenticated, (req,res)=>{
User.findById(req.user._id)
    .then(user=>{
        res.json(user)
    })
})


module.exports = router;