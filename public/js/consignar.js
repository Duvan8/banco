$(document).ready(function () {
    $('.consignar').on('click',function(){
        let btn=$('.consignar').index(this);
        let saldo=$('.saldo').eq(btn);
        let nomusu=$('.nomusu').eq(btn);
        let clave=$('.clave').eq(btn);

        let d=doc.val();
        let nombre=nomusu.val();
        let clav=clave.val();
       

        alert("datos"+d+nombre+clav);

        $.ajax({
            type:"POST",
            url:'/actucliente',
            data:{
                dd:d,uu:nombre,cc:clav
            }
        });
    });
});