const db = require('../database/models');
const bcrypt = require('bcryptjs');


module.exports = {
    login: function(req, res){
        res.render('login');
    },
    enter: function(req, res){
        db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(usuario){
            if(usuario.email == 'admin@gmail.com'){
                if(bcrypt.compareSync(req.body.contrasena, usuario.contrasena)){
                    req.session.userSession = usuario.id
                    res.redirect('/')
                }else{
                    res.redirect('/user/login')
                }
            } else {
                res.redirect('/user/login')
            }
        })
        .catch(function(e){
            res.send(e)
        })
    }, 
    register: function(req, res){
        res.render('register');
    }, 
    saveUser: function(req, res){
        db.Usuario.create({
          email: req.body.email,
          rol: 1,
          contrasena: bcrypt.hashSync(req.body.contrasena, 10),
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          telefono: req.body.telefono,
          pais: null 
        })
        .then(function(usuario){
            req.session.userSession = usuario.id
            res.redirect('/')
        })
        .catch(function(e){
            res.send(e)
        })
    },
    account: function(req, res){
        db.Usuario.findByPk(req.params.idUser)
        .then(function(usuario){
            res.render('cuenta', {usuario});
        })
        .catch(function(e){
            res.send(e)
        })
    }, 
    accountEdit: function(req, res){
        db.Usuario.findByPk(req.params.idUser)
        .then(function(usuario){
            res.render('accountEdit', {usuario});
        })
        .catch(function(e){
            res.send(e)
        })
    },
    update: function(req, res){
        db.Usuario.update({
            email: req.body.email,
            rol: 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
        }, {
            where: {
                id: req.params.idUser
            }
        })
        .then(function(usuario){
            res.redirect('/user/' + req.params.idUser + '/account')
        })
        .catch(function(e){
            res.send(e)
        })
    },
    inscripciones: function(req, res){
        console.log(req.session)
        db.Inscripcion.findAll({
            include:[{association: 'Usuario', where: {id: req.session.userSession}}, {association: 'Prueba', include: [{association:'Concurso', include: [{association:'Hipico'}]}]}]    
        })
        .then((inscripciones) => {
            let iFilter = []
            let arrTotalParcial = []
            let totalParcial = 0 
            for(let i = 0 ; i < inscripciones.length ; i ++){
                if(inscripciones[i].estado == 1){
                    iFilter.push(inscripciones[i])
                    arrTotalParcial.push(inscripciones[i].Prueba.precio)
                }
            }
            for(let j = 0 ; j < arrTotalParcial.length ; j ++){
                totalParcial += arrTotalParcial[j]
            }
            console.log(totalParcial)
            let serviciosCalc = Number((totalParcial/100)*10)
            let servicios = Number(serviciosCalc.toFixed(0))
            let total = Number(totalParcial + servicios)
            // return res.send(iFilter)
            return res.render('misInscripciones', {iFilter, totalParcial, servicios, total})
        })
        .catch((e) => {
            res.send(e)
        })
    },
    logout: function(req, res){
        req.session.destroy()
        res.redirect('/')
    },
    iDestroy: function(req, res){
        db.Inscripcion.destroy({
            where: {
                id: req.params.idInscripcion
            }
        })
        .then(function(){
            res.redirect('/user/' + req.params.idUser + '/inscripciones')
        })
        .catch(function(e){
            res.send(e)
        })
    }, 
    testPay: async (req, res) => {
        let inscripciones = await db.Inscripcion.findAll( {
            include:[{association: 'Prueba'}], 
            where: {
                usuario_id: req.params.idUser,
                estado: 1
            }
        })
        let anotadosCalc = []
        let prueba = []
        let iUpdate = []

        for(let i = 0 ; i < inscripciones.length ; i++ ){
            anotadosCalc.push(Number(inscripciones[i].Prueba.anotados+1));
            prueba = await db.Prueba.update({
                anotados: anotadosCalc[i],
            }, {
                where: {
                    id: inscripciones[i].prueba_id
                }
            })
            iUpdate = db.Inscripcion.update({
                estado: 2
            }, {
                where: {
                    id: inscripciones[i].id
                }
            })
        }
        return res.redirect('/user/'+inscripciones[0].usuario_id+'/inscripciones')
    },
    panelAdmin: async (req, res) => {
        let reducer = (a, b) => {
            return a + b
        }
        let hipicos = await db.Hipico.findAll()
        let hDeuda = await db.Hipico.findAll({
            where: {
                pago_deuda: 1,
                habilitado: 2
            }, 
            include:[{association: 'Concurso', 
                    where: {estado : 2},
                    include:[{association: 'Prueba'}]
                }]
        })
        let prueba = null
        let pruebasCalc = []
        let pruebasCant = []
        let concurso = null
        let concursoCalc = []
        let concursoCant = []
        let concursoRec = []
        
        for(let i = 0 ; i < hDeuda.length ; i ++){
            concursoCant.push(hDeuda[i].Concurso.length)
            for(let j = 0 ; j < hDeuda[i].Concurso.length ; j ++){
                pruebasCant.push(Number(hDeuda[i].Concurso[j].Prueba.length))
                for(let h = 0 ; h < hDeuda[i].Concurso[j].Prueba.length ; h ++){
                    prueba += Number(hDeuda[i].Concurso[j].Prueba[h].anotados)*Number(hDeuda[i].Concurso[j].Prueba[h].precio)
                    
                }
                concursoRec.push(prueba)
                pruebasCalc.push(prueba)
            }
        }
        
        for(let i = 0 ; i < pruebasCalc.length ; i ++){
            if(pruebasCalc[i] == null){
                pruebasCalc[i] = 0
            }
            if(concursoRec[i] == null){
                concursoRec[i] = 0
            }
        }
        let deuda = []
        let mensual = 5000
        for(let i = 0 ; i < hDeuda.length ; i ++){
            concursoCalc.push(pruebasCalc.splice(0, concursoCant[i]))
            if(hDeuda[i].pago_mes == 1){
                deuda.push(concursoCalc[i].reduce(reducer)+mensual)
            } else {
                deuda.push(concursoCalc[i].reduce(reducer))
            }
        }

        return res.render('panelAdmin', {hipicos, hDeuda, concursoCalc, deuda, mensual})
    }
}