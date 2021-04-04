const db = require('../database/models');

async function createLocals(req, res, next) {
    if(req.session.userSession != undefined) {
        let user = await db.Usuario.findByPk(req.session.userSession)
        if(user) {
            res.locals.userLoggedIn =  user.id
            
        }
    }
    next()
}

module.exports = createLocals;