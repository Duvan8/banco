$(document).ready(function(){

    $('.eusucu').on('click',function(){

        let btn=$('.eusucu').index(this);
        let docum=$('.doc').eq(btn);

        let dedo=docum.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/elicuentas',
            data:{
                deo:dedo
            }
        });
    })
})