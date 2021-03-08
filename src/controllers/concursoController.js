module.exports = {
    cForm: function(req, res){
        res.render('formConcurso');
    },
    read: function(req, res){
        res.render('concursos');
    },
    cDetail: function(req, res){
        res.render('detalleConcurso');
    }, 
    pEdit: function(req, res){
        res.render('formPruebaEdit');
    },
    cEdit: function(req, res){
        res.render('formConcursoEdit');
    }, 
    iForm: function(req, res){
        res.render('formInscripcion');
    }, 
    pDetail: function(req, res){
        res.render('detallePrueba')
    }
}