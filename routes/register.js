const express = require('express')
const router = express.Router()
const Login = require('../models/Login')

router.post('/', async (req, res) => {
    // res.send("from login")
    const {username, password, email, role} = req.body

    // console.log("login , ",username, password, email, role);
    
    const loginEntry = await Login.create({
        username, 
        password, 
        email, 
        role
    })

    res.json({message: 'data inserted successfully, ', data: loginEntry})


})



module.exports = router
