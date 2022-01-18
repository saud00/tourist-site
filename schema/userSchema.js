const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String, required : true
    },
    email:{
        type: String, required: true
    },
    phone:{
        type: Number
    },
    password: {
        type: String, required: true
    },
    cPassword:{
        type: String, required: true
    },
    tokens:[
        {
            token:{
                type: String, required: true
            }
        }
    ],
    date:{
        type: Date
    }

})

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id}, process.env.TOKEN)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        console.log(console.error)
    }
}

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password, 7)
        this.cPassword = await bcrypt.hash(this.cPassword, 7)
    }
    next()
})

const User = mongoose.model('USER', userSchema)
module.exports = User;