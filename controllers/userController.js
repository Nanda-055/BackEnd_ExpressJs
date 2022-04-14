const { comparePassword } = require('../helpers/bcrypt')
const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static async register(req,res){
        try {
            const payload = {
                username: req.body.username,
                password:req.body.password
            }   
            const result = await User.create(payload)

            const response = {
                id:result.id,
                username: result.username
            }
            return res.status(201).json(response)
        } catch (error) {
            return res.status(500).json({
                message:error
            })
        }
    }

    static async Login(req,res){
        try {
            const payload = {
                username: req.body.username,
                password:req.body.password
            } 
            const result = await User.findOne({
                where: {
                    username: payload.username
                }
            })
            if(!result){
                return res.status(401).json({
                    message: 'Invalid username / password'
                })
            } 
            const match = comparePassword(payload.password, result.password)
            if(match){
                const opt = {
                    id: result.id,
                    username: result.username
                }
                const access_token = generateToken(opt)
                return res.status(200).json({
                    access_token
                })
            }else{
                return res.status(200).json({
                    message: 'Invalid username / password'
                })
            }
        } catch (error) {
            return res.status(500).json({
                message : error
            })
        }
    }
}

module.exports = UserController

