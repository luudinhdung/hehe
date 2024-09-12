const { token } = require('morgan')
const logger = require('../utils/logger')

class AuthController {
    login(req,res){
        logger.info('hhehehe')
        res.send('auth/login')
    }
 
}

module.exports = new AuthController