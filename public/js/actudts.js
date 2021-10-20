const { usu } = require("../../controlador/controller");

$(document).ready(function () {
    $('.dts').on('click',function(){
        let btn=$('.dts').index(this);
        alert(btn)
        let documento=$('.doc').eq(btn);
        let nom=$('.usu').eq(btn);
        let ape=$('.cla').eq(btn);
        let corr=$('.rol').eq(btn);
        let cel=$('.est').eq(btn);
        let sex=$('.sex').eq(btn);
        let fech=$('.fec').eq(btn);

        let dc=documento.val();
        let nm=nom.val();
        let ae=ape.val();
        let cr=corr.val();
        let cl=cel.val();
        let sx=sex.val();
        let fh=fech.val();
       

        alert("datos"+dc+nm+ae+cr+cl+sx+fh);

        $.ajax({
            type:"POST",
            url:'/actudts',
            data:{
                dt:dc,nm:nm,ae:ae,cr:cr,cl:cl,sx:sx,fh:fh
            }
        });
    });
});