$(document).ready(function () {
    $('.cred').on('click',function(){
        let btn=$('.cred').index(this);
        alert(btn)
        let codigo=$('.codigocredito').eq(btn);
        let documento=$('.doccli').eq(btn);
        let costo=$('.coslinea').eq(btn);
        let prestamo=$('.montoprestado').eq(btn);
        let fecha=$('.fechaaprobada').eq(btn);
        let plazo=$('.plazo').eq(btn);

        let cg=codigo.val();
        let dc=documento.val();
        let co=costo.val();
        let po=prestamo.val();
        let fa=fecha.val();
        let pa=plazo.val();
       

        alert("datos"+cg+dc+co+po+fa+pa);

        $.ajax({
            type:"POST",
            url:'/actucredi',
            data:{
                cdi:cg,dot:dc,cts:co,ptm:po,fch:fa,plz:pa
            }
        });
    });
});