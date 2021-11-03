$(document).ready(function() {
    alert("insertar");
    $('.ingre').on('click', function() {
        let btn = $('.ingre').index(this);
        alert(btn)
        let doc = $('.doccli').eq(btn);
        let usu = $('.nomusu').eq(btn);
        let cla = $('.clave').eq(btn);
        let rol = $('.rol').eq(btn);
        let est = $('.estado').eq(btn);
        let img = $('.imagen').eq(btn);

        let doi = doc.val();
        let us = usu.val();
        let ca = cla.val();
        let ro = rol.val();
        let es = est.val();
        let im = img.val();

        alert("datos" + doi + us + ca + ro + es + im);

        $.ajax({
            type: "POST",
            url: '/inserusu',
            data: {
                dc: doi,
                us: us,
                cl: ca,
                rl: ro,
                et: es,
                ig: im
            }
        });
    });
});
/*$(document).ready(function() {
    alert("insertar usuario");
    $('.btnact').on('click', function() {
        let btn = $('.btnact').index(this);
        alert(btn)
        let doc = $('.doccli').eq(btn);
        let usu = $('.nomusu').eq(btn);
        let cla = $('.clave').eq(btn);
        let rol = $('.rol').eq(btn);
        let est = $('.estado').eq(btn);
        let img = $('.imgagen').eq(btn);

        let doc = doc.val();
        let usu = usu.val();
        let cla = cla.val();
        let rol = rol.val();
        let est = est.val();
        let img = img.val();

        alert("datos" + doc + usu + cla + rol + est + img);

        $.ajax({
            type: "POST",
            url: '/inserusu',
            data: {
                dc: doc,
                us: usu,
                cl: cla,
                rl: rol,
                et: est,
                ig: img
            }
        });
    });
});*/