const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const userRouter = require('./routers/userRouter');
const concursoRouter = require('./routers/concursoRouter');


app.set("view engine", "ejs") 
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, '../public'))); 


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/concurso', concursoRouter);


app.listen(3002, function(){
    console.log('el servidor esta corriendoooooooo :)')
})