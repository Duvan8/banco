$(document).ready(function(){

    $('.btnclieli').on('click',function(){

        let btn=$('.btnclieli').index(this);
        let doc=$('.doccli').eq(btn);
        alert("datos"+doc);

        
        let y=doc.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/btnclieli',
            data:{
                yy:y
            }
        });
    })
})