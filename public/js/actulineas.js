$(document).ready(function () {
    alert("bienvenido");
    $('.Actu').on('click',function(){
        let btn=$('.Actu').index(this);
        alert(btn)
        let codl=$('.codlinea').eq(btn);
        let noml=$('.nomlinea').eq(btn);
        let montom=$('.montomaxicredito').eq(btn);
        let plazomax=$('.plazomaxcred').eq(btn);

        let cod=codl.val();
        let nom=noml.val();
        let mont=montom.val();
        let pla=plazomax.val();
       

        alert("datos"+cod+nom+mont+pla);

        $.ajax({
            type:"POST",
            url:'/actulineas',
            data:{
                cd:cod,nm:nom,mt:mont,pa:pla
            }
        });
    });
});