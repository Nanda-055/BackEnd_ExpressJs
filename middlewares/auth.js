const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authenticate = async(req,res,next) => {
    try {
        let decoded = verifyToken(req.headers.access_token)
        let result = await User.findOne({
            where:{
                username:decoded.username
            }
        })
        if(result){
            req.user = result
            next()
        }else{
            return res.status(400).json({
                message: 'Please Login First!'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error!'
        })
    }
}

module.exports = {
    authenticate
}