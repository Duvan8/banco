$(document).ready(function(){

    $('.btneli').on('click',function(){

        let btn=$('.btneli').index(this);
        let doc=$('.doc').eq(btn);

        let d=doc.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/eliminar',
            data:{
                dd:d
            }
        });
    })
})