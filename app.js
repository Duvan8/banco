//ESTAS SON LAS ESTIQUETAS QUE INSTALAMOS EN EL JSON
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const session = require('express-session');
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3000);//ESTE ES EL PURTO POR EL QUE VAMOS A NAVEGAR EN EL EXPLORADOR
app.use(express.static(path.join(__dirname, 'public')));//AQUI SE CONECTAN CON LOS DATOS DE LA CARPETA PUBLIC CON LOS EJS QUE ESTAN EN LA CARPETA VISTA
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vista'));

app.use(session({
    secret: '123',
    resave: true,
    saveUninitialized: true 
}))

app.use(express.urlencoded({ extended: true }));
app.use(require('./rutas/rutas'));
app.use((err, req, res, next) => {
    res.send({ err: err.message });
});

//ES PARA QUE EL NAVEGADOR ENCUENTRE EL PUERTO
app.listen(app.get('port'), () => {
    console.log(`En el servidor ${app.get(`port`)}`);
})