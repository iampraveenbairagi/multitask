const router = require("express").Router()
const knex = require('../Databases/db')
var request = require('request');



router.get('/',(req,res)=>{
    res.send("home")
})

// insert data
router.post('/', async(req, res) => {
    try{
    const userdata={
        Name: req.body.Name,
        password: req.body.password,
        email: req.body.email
    }
    let email=req.body.email
    if (email!==undefined) {
    knex('userdata1').insert(userdata) .then((data) => {
        console.log(data);
        res.send("user successfully")
    })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
    }
    else{
        res.send("your email is not here")
    }
}
    
    catch (error) {
        console.error(error);
      }

})



module.exports = router;