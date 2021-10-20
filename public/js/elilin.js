$(document).ready(function(){

    $('.btnlineli').on('click',function(){

        let btn=$('.btnlineli').index(this);
        let cod=$('.codlinea').eq(btn);

        let cdi=cod.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/elilin',
            data:{
                elin:cdi
            }
        });
    })
})