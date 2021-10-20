const connection = require('../conexion/conexion');//EN ESTE NOS VAMOS A LA CARPETA DONDE SE CONECTA CON LA BASE DE DATOS
const cnn = connection();//HACE LA CONEXION
const { render } = require('ejs');//SE REQUIEREN LOS PAQUETES EJS
const bcryptjs = require('bcryptjs');
const controller = {};

//SE LLAMA LA VISTA DEL LOGIN
controller.index = (req, res, next) => {
    res.render('login')
    res.send("error en controlador");
}


//bloque para insertar usuarios
controller.consultageneral = (req, res, next) => {
    if (req.session.login) {

        cnn.query('SELECT * FROM  usuarios', (err, resbd) => {
            if (err) {
                next(new Error(err))
                console.log("Error en la consultas")
            }
            else {
                console.log(resbd)
                res.render('consultas', { datos: resbd });
            }
        })
    }
    else {
        res.redirect('/');
    }
}



//SE ENVIA A LA BASE DE DATOS
controller.insertar = async (req, res, next) => {
    const d = req.body.doccli;
    const u = req.body.nomusu;
    const c = req.body.clave;
    const r = req.body.rol;
    const e = req.body.estado;
    const i = req.body.imagen;
    const password = await bcryptjs.hash(c, 8)

    cnn.query('INSERT INTO usuarios SET?', { doccli: d, nomusu: u, clave: password, rol: r, estado: e, imagen: i }, (err, resbd) => {

        if (err) {
            next(new Error(err));
        }
        else {
            //console.log(resbd);

            //res.render('index',{datos:respbd})
            res.redirect('/');
        }


    });


}
controller.insusucli = async (req, res, next) => {
    const di = req.body.doccli;
    const ui = req.body.nomcli;
    const ci = req.body.apecli;
    const ri = req.body.correocli;
    const ei = req.body.celular;
    const ii = req.body.sexo;
    const fi = req.body.fechanaccli;

    cnn.query('INSERT INTO cliente SET?', { doccli: di, nomcli: ui, apecli: ci, correocli: ri, celular: ei, sexo:ii,fechanaccli:fi }, (err, resbd) => {

        if (err) {
            next(new Error(err));
        }
        else {
            //console.log(resbd);

            //res.render('index',{datos:respbd})
            res.redirect('/usucliente');
        }


    });


}
controller.usucuenta = async (req, res, next) => {
    const cd = req.body.codcun;
    const pq = req.body.doccli;
    const tp = req.body.tipcun;
    const sd = req.body.saldo;

    cnn.query('INSERT INTO cuentas SET?', { doccli: pq, codcun: cd, tipcun: tp, saldo: sd}, (err, resbd) => {

        if (err) {
            next(new Error(err));
        }
        else {
            //console.log(resbd);

            //res.render('index',{datos:respbd})
            res.redirect('/usucuentas');
        }


    });


}
controller.inserlineas = async (req, res, next) => {
    const cl = req.body.codlinea;
    const nl = req.body.nomlinea;
    const ml = req.body.montomaxicredito;
    const pl = req.body.plazomaxcred;

    cnn.query('INSERT INTO lineas SET?', { codlinea: cl, nomlinea: nl, montomaxicredito: ml, plazomaxcred: pl}, (err, resbd) => {

        if (err) {
            next(new Error(err));
        }
        else {
            //console.log(resbd);

            //res.render('index',{datos:respbd})
            res.redirect('usulineas');
        }


    });


}
controller.insercreditos = async (req, res, next) => {
    const cc = req.body.codigocredito;
    const dc = req.body.doccli;
    const cd = req.body.codlinea;
    const mc = req.body.montoprestado;
    const fc = req.body.fechaaprobada;
    const pc = req.body.plazo;

    cnn.query('INSERT INTO creditos SET?', { codigocredito: cc, doccli: dc, codlinea: cd, montoprestado: mc, fechaaprobada:fc, plazo:pc}, (err, resbd) => {

        if (err) {
            next(new Error(err));
        }
        else {
            //console.log(resbd);

            //res.render('index',{datos:respbd})
            res.redirect('usucreditos');
        }


    });


}

controller.mostrar = async (req, res, next) => {
    cnn.query('SELECT * FROM cliente INNER JOIN usuarios on(cliente.doccli=usuarios.doccli) WHERE nomusu=?', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('dtscliente', { datos: resbd });
        }
    })
}
controller.acliente = async (req, res, next) => {
    cnn.query('SELECT * FROM cliente INNER JOIN usuarios on(cliente.doccli=usuarios.doccli) WHERE nomusu=?', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('acliente', { datos: resbd });
        }
    })
}
controller.lineas = async (req, res, next) => {
    cnn.query('SELECT * FROM lineas INNER JOIN usuarios on(usuarios.doccli=usuarios.doccli) WHERE nomusu=?', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('lineas', { datos: resbd });
        }
    })
}
controller.creditos = async (req, res, next) => {
    cnn.query('SELECT * FROM creditos INNER JOIN usuarios on(creditos.doccli=usuarios.doccli) WHERE nomusu=?', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('creditos', { datos: resbd });
        }
    })
}
controller.cuentas = async (req, res, next) => {
    cnn.query('SELECT * FROM cuentas INNER JOIN usuarios on(cuentas.doccli=usuarios.doccli) WHERE nomusu=?', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('cuentas', { datos: resbd });
        }
    })
}
controller.usucuentas = async (req, res, next) => {
    cnn.query('SELECT * FROM cuentas', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('usucuentas', { datos: resbd });
        }
    })
}
controller.vistcliente = async (req, res, next) => {
    if (req.session.login) {

        cnn.query('SELECT * FROM  cliente', (err, resbd) => {
            if (err) {
                next(new Error(err))
                console.log("Error en la clinete")
            }
            else {
                console.log(resbd)
                res.render('vistcliente', { datos: resbd });
            }
        })
    }
    else {
        res.redirect('/');
    }
}
controller.usucliente = async (req, res, next) => {
    cnn.query('SELECT * FROM cliente', (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('usucliente', { datos: resbd });
        }
    })
} 
controller.usulineas = async (req, res, next) => {
    cnn.query('SELECT * FROM lineas INNER JOIN usuarios on(usuarios.doccli=usuarios.doccli) WHERE nomusu=?', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('usulineas', { datos: resbd });
        }
    })
}   
controller.usucreditos = async (req, res, next) => {
    cnn.query('SELECT * FROM creditos', [req.session.usss], (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('usucreditos', { datos: resbd });
        }
    })
}
controller.transferir = async (req, res, next) => {
    cnn.query('SELECT * FROM cliente', (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('transferir', { datos: resbd });
        }
    })
}
controller.consignar = async (req, res, next) => {
    cnn.query('SELECT * FROM cuentas', (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('consignar', { datos: resbd });
        }
    })
}
controller.retirar = async (req, res, next) => {
    cnn.query('SELECT * FROM cuentas', (err, resbd) => {
        if (err) {
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else {
            console.log(resbd)
            res.render('retirar', { datos: resbd });
        }
    })
}

//VALIDAR AL USUARIO A LA HORA DE ENTRAR
controller.login = async (req, res, next) => {
    const usu = await req.body.nomusu;
    const cla = await req.body.login;
    console.log(usu, cla);
    cnn.query('SELECT * FROM usuarios WHERE nomusu=?', [usu], async (err, results) => {
        //este if nos sirve para que nos direcione al error
        if (err) {
            next(new Error("Error de consulta login", err));
        }
        //nos sirve para encontrar solo al usuario
        if ((results != 0)) {
            console.log("primer if prueba", (results[0].clave));
            //este es para encontrar la contraseña
            if ((bcryptjs.compare(cla, results[0].clave))) {
                console.log("datos correctos segundo");
                //res.redirect('consultas');
                let rol = results[0].rol;
                let usu = results[0].nomusu;
                req.session.login = true; //se genera la variable de sesion
                console.log(rol);
                rol = results[0].rol;
                uss = results[0].nomusu;
                req.session.doccc = results[0].doccli;
                req.session.usss = results[0].nomusu
                switch (rol) {
                    case 'cliente':
                        res.redirect('clinete');
                        break;
                    case 'usuario':
                        res.redirect('usuarios');
                        break;
                    case 'administrador':
                        res.redirect('vistadmin');
                        break;
                }
            }
            else {
                console.log("datos incorrectos segundo else");
                res.redirect('/');
            }
        }
        else {
            console.log(results[0].usu, results[0].clave);
            console.log("datos incorrectos");

        }
    });
}

controller.clinete = (req, res, next) => {
    console.log("EN LA VISTA DEL cliente");
    res.render('clinete');
}
controller.vistadmin = (req,res,next) => {
    res.render('vistadmin');
}
controller.usuarios = (req,res,next) => {
    res.render('usuarios');
}
controller.transferir = (req,res,next) => {
    res.render('transferir');
}
controller.actualizar = async (req, res, next) => {
    const docx = req.body.dd;
    const usux = req.body.uu;
    const clax = req.body.cc;
    const rolx = req.body.rr;
    const estx = req.body.ee;
    const imgx = req.body.ii;
    const password = await bcryptjs.hash(clax, 8)

    cnn.query('UPDATE usuarios SET nomusu="' + usux + '",clave="' + password + '",rol="' + rolx + '", estado="' + estx + '",imagen="' + imgx + '" WHERE doccli="' + docx + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('consultas');
        }
    })
}
controller.actucuentas = async (req, res, next) => {
    const codi = req.body.cod;
    const docu = req.body.doc;
    const tipo = req.body.tip;
    const sald = req.body.sal;

    cnn.query('UPDATE cuentas SET codcun="' + codi + '",doccli="' + docu + '",tipcun="' + tipo + '", saldo="' + sald + '" WHERE doccli="' + docu + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('usucuentas');
        }
    })
}


controller.actudts = async (req, res, next) => {
    const doci = req.body.dc;
    const nomci = req.body.nm;
    const apeci = req.body.ae;
    const corci = req.body.cr;
    const celci = req.body.cl;
    const sexci = req.body.sx;
    const fecci = req.body.fh;

    cnn.query('UPDATE cliente SET nomcli="' + nomci + '",apecli="' + apeci + '",correocli="' + corci + '", celular="' + celci + '",sexo="' + sexci + '",fechanaccli="' + fecci + '" WHERE doccli="' + doci + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('dtscliente');
        }
    })
}
controller.actuli = async (req, res, next) => {
    const cod = req.body.cd;
    const nom = req.body.ci;
    const mont = req.body.mc;
    const plaz = req.body.pc;

    cnn.query('UPDATE lineas SET nomlinea="' + nom + '",montomaxicredito="' + mont + '", plazomaxcred="' + plaz +'",WHERE codlinea="' + cod + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('lineas');
        }
    })
}
controller.btn = async (req, res, next) => {
    const docx = req.body.dd;
    const usux = req.body.uu;
    const apex = req.body.cc;
    const corx = req.body.rr;
    const celx = req.body.ee;
    const sexx = req.body.ii;
    const fecx = req.body.ff;

    cnn.query('UPDATE cliente SET nomcli="' + usux + '",apecli="' + apex + '",correocli="' + corx + '", celular="' + celx + '",sexo="' + sexx + '",fechanaccli="' + fecx + '" WHERE doccli="' + docx + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('usucliente');
        }
    })
}
controller.actucliente = async (req, res, next) => {
    const docxc = req.body.dd;
    const u = req.body.uu;
    const c = req.body.cc;
    const password = await bcryptjs.hash(c, 8)

    cnn.query('UPDATE usuarios SET nomusu="' + u + '",clave="'+ password +'" WHERE doccli="' + docxc + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('acliente');
        }
    })
}
controller.actulineas = async (req, res, next) => {
    const cod = req.body.cd;
    const nom = req.body.nm;
    const mont = req.body.mt;
    const pla = req.body.pa;

    cnn.query('UPDATE lineas SET codlinea="'+ cod +'",nomlinea="'+ nom +'",montomaxicredito="'+ mont +'",plazomaxcred="'+ pla +'"WHERE codlinea="' + cod + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('usulineas');
        }
    })
}
/*controller.actucredi = async (req, res, next) => {
    const co = req.body.cdi;
    const docu = req.body.dot;
    const cos = req.body.cts;
    const pres = req.body.ptm;
    const fec = req.body.fch;
    const pz = req.body.plz;
    

    cnn.query('UPDATE lineas SET codigocredito="'+ co +'",plazo="'+ pz +'",codlinea="'+ cos +'",montoprestado="'+ pres +'",fechaaprobada="'+ fec +'"WHERE doccli="' + docu + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('usucreditos');
        }
    })
}*/
controller.actucredi = async (req, res, next) => {
    const c = req.body.cdi;
    const d = req.body.dot;
    const t = req.body.cts;
    const p = req.body.ptm;
    const f = req.body.fch;
    const z = req.body.plz;

    cnn.query('UPDATE creditos SET codigocredito="' + c +'",codlinea="' + t + '", montoprestado="' + p + '",fechaaprobada="' + f + '",plazo="' + z +'" WHERE doccli="' + d + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Actualizado")
            res.redirect('usucreditos');
        }
    })
}

controller.eliminar = async (req, res, next) => {
    const docy = req.body.dd;
    cnn.query('DELETE FROM usuarios WHERE doccli="' + docy + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Eliminado")
            res.redirect('consultas');
        }
    })
}
controller.elicuentas = async (req, res, next) => {
    const docm = req.body.deo;
    cnn.query('DELETE FROM cuentas WHERE doccli="' + docm + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Eliminado")
            res.redirect('usucuentas');
        }
    })
}
controller.elilin = async (req, res, next) => {
    const cod = req.body.elin;
    cnn.query('DELETE FROM lineas WHERE codlinea="' + cod + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Eliminado")
            res.redirect('usulineas');
        }
    })
}
controller.elicredi = async (req, res, next) => {
    const docy = req.body.dd;
    cnn.query('DELETE FROM creditos WHERE doccli="' + docy + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Eliminado")
            res.redirect('usucreditos');
        }
    })
}
controller.btnclieli = async (req, res, next) => {
    const doctor = req.body.yy;
    cnn.query('DELETE FROM cliente WHERE doccli="' + doctor + '"', async (err, respbb) => {
        if (err) {
            next(new Error(err));
        }
        else {
            console.log("Eliminado")
            res.redirect('usucliente');
        }
    })
}

controller.cli = async (req, res, next) => {
    res.redirect('acliente');
}
controller.clo = async (req, res, next) => {
    res.redirect('dtscliente');
}
controller.cla = async (req, res, next) => {
    res.redirect('lineas');
}
controller.cle = async (req, res, next) => {
    res.redirect('creditos');
}
controller.clu = async (req,res,next) => {
    res.redirect('cuentas');
}
controller.ucu = async (req,res,next) => {
    res.redirect('usucuentas');
}
controller.usu = async (req,res,next) => {
    res.redirect('usucliente');
}
controller.uso = async (req,res,next) => {
    res.redirect('usulineas');
}
controller.usi = async (req,res,next) => {
    res.redirect('usucreditos');
}
controller.cun = async (req,res,next) => {
    res.redirect('consignar');
}
controller.can = async (req,res,next) => {
    res.redirect('transferir');
}
controller.cin = async (req,res,next) => {
    res.redirect('retirar');
}
controller.clae = async (req,res,next) => {
    res.redirect('./');
}
controller.cerrar = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
}
module.exports = controller;