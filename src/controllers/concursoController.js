const db = require('../database/models');
const fetch = require('node-fetch');

module.exports = {
    read: function(req, res){
        db.Concurso.findAll({
            include: [{association: 'Hipico'}]
        })
        .then((concurso) => {
            res.render('concursos', {concurso});    
        })
        .catch((e) => {
            res.send(e)
        })
    },
    cDetail: function(req, res){
        db.Concurso.findByPk(req.params.idConcurso, {
            include: [
                {
                    association: 'Hipico'
                },
                {
                    association: 'Prueba',
                    order: [
                        ['numero', 'ASC']
                    ],
                    include: [{association: 'Categoria'}]
                }
            ]
        })
        .then((concurso) => {
            res.render('detalleConcurso', {concurso});
        })
        .catch((e) => {
            res.send(e)
        })
        
    }, 
    iForm: async function(req, res){
        let paises = []

            const url = 'https://restcountries.eu/rest/v2/all'
            const result = await fetch(url);
            const data = await result.json();//assuming data is json
            for(let i = 0 ; i < data.length ; i ++){
                paises.push({
                    nombre: data[i].name,
                    siglas: data[i].alpha3Code
                })
            }
            
        let prueba = await db.Prueba.findByPk(req.params.idPrueba, {include:[{association:'Categoria'}]})
        let concurso = await db.Concurso.findByPk(req.params.idConcurso)
        let usuario = await db.Usuario.findByPk(req.session.userSession)
        let categoria = await db.Categoria.findAll()
        return res.render('formInscripcion', {usuario , categoria, paises, prueba, concurso});
    }, 
    pDetail: async function(req, res){
        let inscripcionesTodas = await db.Inscripcion.findAll({
            include: [
                {
                    association: 'Prueba',
                    include: [
                        {association: 'Concurso', 
                        include: [{association: 'Hipico'}]
                    }
                    ],
                    where: {
                        id: req.params.idPrueba
                    }
                },{
                    association: 'Usuario'
                },{
                    association: 'Categoria'
                }
            ]
        })
        let prueba = await db.Prueba.findByPk(req.params.idPrueba)
        let concurso = await db.Concurso.findByPk(req.params.idConcurso, {include: [{association:'Hipico'}]})
        let inscripciones = []
        if(inscripcionesTodas.length != 0){
            for(let i = 0 ; i < inscripcionesTodas.length ; i ++){
                if(inscripcionesTodas[i].estado == 2){
                    inscripciones.push(inscripcionesTodas[i])
                    return res.render('detallePrueba', {inscripciones, prueba, concurso})
                    } else {
                        return res.render('detallePrueba', {inscripciones, prueba, concurso})
                    }
                }    
        } else {
            return res.render('detallePrueba', {inscripciones, prueba, concurso})
        }
        
        
    },
    iCreate: async function(req, res){
        let inscripcion = await db.Inscripcion.create({
            usuario_id: req.session.userSession,
            prueba_id: req.params.idPrueba,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            caballo: req.body.caballo,
            categoria_id: req.body.categoria,
            club: req.body.club,
            pais: req.body.pais,
            estado: 1
        })
        let usuarioPrueba = await db.Usuario_prueba.create({
            usuario_id: req.session.userSession,
            prueba_id: req.params.idPrueba
        })
        
        return res.redirect(`/concurso/${req.params.idConcurso}/${req.params.idPrueba}/detail`)
    }
}