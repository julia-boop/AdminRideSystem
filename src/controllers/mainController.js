module.exports = {
    home: function(req, res){
        res.render('home');
    }, 
    contact: function(req, res){
        res.render('contact')
    }, 
    mAdmin: function(req, res){
        res.render('panelMoi')
    },
    eAdmin: function(req, res){
        res.render('panelHipico')
    }
}