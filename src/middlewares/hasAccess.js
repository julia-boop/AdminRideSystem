function hasAcccess(req, res, next){
    if(req.session.userSession == undefined){
        res.redirect('/user/login')
    } else {
        next()
    }
}

module.exports = hasAcccess;