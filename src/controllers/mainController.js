const db = require('../database/models')

module.exports = {
    home: function(req, res){
        db.Concurso.findAll({
            include: [
                {association : 'Hipico'}
            ]
        })
        .then((concurso) => {
            res.render('home', {concurso});
        })
        .catch((e) => {
            res.send(e)
        })
        
    }, 
    contact: function(req, res){
        res.render('contact')
    }
}
    
