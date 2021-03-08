module.exports = {
    login: function(req, res){
        res.render('login');
    },
    register: function(req, res){
        res.render('register');
    }, 
    account: function(req, res){
        res.render('cuenta');
    }, 
    accountEdit: function(req, res){
        res.render('accountEdit');
    },
    inscripciones: function(req, res){
        res.render('misInscripciones');
    }
}