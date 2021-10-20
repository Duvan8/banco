$(document).ready(function () {
    alert("bienvenido");
    $('.ausucu').on('click',function(){
        let btn=$('.ausucu').index(this);
        alert(btn)
        let codigo=$('.cod').eq(btn);
        let documento=$('.doc').eq(btn);
        let tipo=$('.tip').eq(btn);
        let saldo=$('.saldo').eq(btn);

        let cod=codigo.val();
        let doc=documento.val();
        let tip=tipo.val();
        let sal=saldo.val();       

        alert("datos"+cod+doc+tip+sal);

        $.ajax({
            type:"POST",
            url:'/actucuentas',
            data:{
                cod:cod,doc:doc,tip:tip,sal:sal
            }
        });
    });
});