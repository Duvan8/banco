$(document).ready(function () {
    $('.btncli').on('click',function(){
        let btn=$('.btncli').index(this);
        alert(btn)
        let doc=$('.doccli').eq(btn);
        let usu=$('.usu').eq(btn);
        let ape=$('.cla').eq(btn);
        let cor=$('.rol').eq(btn);
        let cel=$('.est').eq(btn);
        let sex=$('.sex').eq(btn);
        let fec=$('.fec').eq(btn);

        let d=doc.val();
        let u=usu.val();
        let c=ape.val();
        let r=cor.val();
        let e=cel.val();
        let i=sex.val();
        let f=fec.val();

        alert("datos"+d+u+c+r+e+i+f);

        $.ajax({
            type:"POST",
            url:'/btn',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e,ii:i,ff:f
            }
        });
    });
});