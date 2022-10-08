const User = require('../models/user')
const CryptoJS = require('crypto-js')
const jsonwebtoken = require('jsonwebtoken')
const register =  async (req,res) => {
    const { password } = req.body;
    try{
        req.body.password = CryptoJS.AES.encrypt(password,process.env.PASSWORD_SECRET_KEY,{
            expiresIn: '24h'
        })
        const user = await User.create(req.body)
        const token = jsonwebtoken.sign({id:user._id},process.env.TOKEN_SECRET_KEY,{expiresIn:'24h'})
        res.status(200).json({user,token})
    }catch(err){
        res.status(500).json(err)
    }

}

exports.register = register;
