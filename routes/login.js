const express = require('express')
const router = express.Router()
const Login = require('../models/Login')


router.post('/get_user', async (req, res) => {
    // res.send("from login")
    const { username, password } = req.body

    // console.log("login , ",username, password, email, role);
    try {
        const getUser = await Login.findOne({ where: { username: username, password: password } })
        if (!getUser) {
            res.send("no user found")
        }
        res.json({ success: 'user found', data: getUser })

    }
    catch (err) {
        res.send("error executing get_user : ", err)
    }



})



// {
//     "message": "password matched",
//     "userRecords": {
//       "id": 4,
//       "username": "suthan",
//       "password": "password",
//       "email": "suthan@test.com",
//       "role": "dev",
//       "createdAt": "2024-08-15T17:33:07.000Z",
//       "updatedAt": "2024-08-15T17:33:07.000Z"
//     }
//   }
router.post('/user_auth', async (req, res) => {
    const { username, password } = req.body

    try {
        const userRecords = await Login.findOne({ where: { username: username } })

        if (!userRecords) {
            res.send("password does not match !")

        }

        if (password === userRecords.password) {
            res.json({ success: true, id: userRecords.id , role : userRecords.role })

        }
        else {
            res.json({ message: "password dose not matched :)" })

        }

    }
    catch (err) {
        res.send("error view" + err)
    }
})



router.post(() => {

})


module.exports = router
