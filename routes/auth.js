const router = require('express').Router();
const User = require('../model/User')

router.post('/register',async (req,res) => {
    // res.send("Register")
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send("Error: "+err)
    }
})

router.post('/login',(req,res) => {
    res.send("Login")
})

module.exports = router;