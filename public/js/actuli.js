$(document).ready(function () {
    alert("Esto es jquery");
    $('.li').on('click',function(){
        let btn=$('.li').index(this);
        alert(btn)
        let cod=$('.codlinea').eq(btn);
        let nli=$('.nomlinea').eq(btn);
        let mxc=$('.montomaxicredito').eq(btn);
        let pmc=$('.plazomaxcred').eq(btn);

        let cd=cod.val();
        let ci=nli.val();
        let mc=mxc.val();
        let pc=pmc.val();        

        alert("datos"+cd+ci+mc+pc);

        $.ajax({
            type:"POST",
            url:'/actuli',
            data:{
                cc:cd,ci:ci,mc:mc,pc:pc
            }
        });
    });
});