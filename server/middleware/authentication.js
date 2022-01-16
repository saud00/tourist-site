const  jwt  = require("jsonwebtoken");
const  User =require("../schema/userSchema")

const Authentication = async(req, res, next)=>{

    try {
        const token = req.cookies.jwtmern
        const verifyToken = jwt.verify(token, process.env.TOKEN)
        console.log('vToken: ', verifyToken)
        const verifyUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})
        console.log(verifyUser)
    
        if (verifyUser) {
            console.log('sorry not autn')
            res.status(401).json({message:"Sign In again", status:"401"})
            throw new Error('user not authnitiacate')
        }else{

            req.token= token
            req.verifyUser = verifyUser
            req.userId = verifyUser._id
            res.status(200).json({message:"Sign In successfully", status:"200"})
        }

    } catch (error) {
        res.status(401).send('unauth catch error')
        console.log(" catch")
    }
    next()
}

module.exports = Authentication