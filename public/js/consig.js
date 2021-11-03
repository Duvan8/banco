$(document).ready(function () {
    alert("bienvenido");
    $('.consignar').on('click',function(){
        let btn=$('.consignar').index(this);
        alert(btn)
        let doc=$('.doc').eq(btn);
        let cod=$('.cod').eq(btn);
        let sal=$('.sal').eq(btn);
        let c=$('.codcun').eq(btn);
        let d=$('.doccli').eq(btn);
        let t=$('.tipcun').eq(btn);
        let s=$('.saldo').eq(btn);

        let d=doc.val();
        let c=cod.val();
        let s=sal.val();
        let co=c.val();
        let di=d.val();
        let ti=t.val();
        let sa=s.val();

        alert("datos"+d+c+s+co+di+ti+sa);
        con=s+sa;
        alert("consignado"+con)

        $.ajax({
            type:"POST",
            url:'/consig',
            data:{
                dd:d,cc:c,ss:s
            }
        });
    });
});