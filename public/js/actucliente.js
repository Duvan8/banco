$(document).ready(function () {
    $('.Actualizar').on('click',function(){
        let btn=$('.Actualizar').index(this);
        alert(btn)
        let doc=$('.doc').eq(btn);
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