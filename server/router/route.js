const express = require('express')
const User = require('../schema/userSchema')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userLogin = require('../schema/loginSchema')
const  Authentication  = require('../middleware/authentication') 

router.get('/',  (req, res)=>{
    res.send('home page')
})

router.get('/contact',  (req, res)=>{
    res.send(' contact page')
})

router.get('/comments',Authentication, async(req, res)=>{
    await console.log("req in route",req.verifyUser)
    await res.send(req.verifyUser)
})

// Register button

router.post( '/reg', async(req, res)=>{
    const date = new Date()
    const {email, name, phone, password, cPassword} = req.body;
    try {
        if( !email || !name || !phone || !password  || !cPassword){
            res.status(422).json({error:"fill all required fields"})
        }
        const userEmail = await User.findOne({email:email})
            if(!userEmail){
                console.log('user reg succsess')
                const dbuser = new User({ name, email, phone, password, cPassword, date})
                await dbuser.save()
                res.status(200).json({message:"User regisetered successfully", status:"200"})
            }else{
                res.status(422).json({err:"Email already exist", status:"422"})
            }
    } catch (error) {
        console.log(error)
    }
})

// Login

router.post('/login', async(req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        res.status(440).json({error:"Fill all fields"})
    }
    
    try {
        const resUser = await User.findOne({email:email});
        console.log(resUser)

        
        const isMatch =await bcrypt.compare(password, resUser.password)
        console.log(isMatch, " ismatch")
        const token = await resUser.generateAuthToken()

        // storing session cookies

        res.cookie('jwtmern',token,{
            expires: new Date(Date.now()+ 22222222222),
            httpOnly:true
        })

        if(isMatch){
            res.status(200).json({message:`${resUser.name} sign In`, status:"200"})
        }else{
            res.status(400).json({error:"Enter correct password", status:"400"})
        }
        
    } catch (error) {
        res.status(400).json({error:"Enter correct credentials"})
    }

})

module.exports = router;





// router.post('/form', (req, res)=>{
//     const {name, email, password , cPassword , phone} = req.body

//     if(!name || !email|| !password || !cPassword || !phone){
//         console.log("fill all fields")
//         return res.json({error:"Fill all the fields for reg"})
//     }
//         User.findOne({email:email})
//         .then((user)=>{
//             if(user){
//                 return res.json({error:"Email already exist"})
//                 console.log(`${name} is already registered`)
//             }
//                 const dbuser = new User({name, email, password , cPassword , phone})

//                 dbuser.save().then((user)=>{
//                      return res.json({message:`${name} is now registered`})
//                 }).catch(err=>console.log("err in saving data to db"))
            
//         }).catch((err)=>{console.log("err in comparing email")})

// })