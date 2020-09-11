    $('ul').on("click","li", function(){
$(this).toggleClass("completed");
    });

    $("ul").on("click", "span",function(e){
        
        $(this).parent().fadeOut(500,function(){
            $(this).remove();//upar wala this is for del niche wala is for 
            //parent element
        });
        e.stopPropagation();//means as span is in li
        // which is in ul which in div may affect all as 
        //it is like forming a bubble so to stop that we use this

    });

    $("input[type='text']").keypress(function(e){
        if(e.which===13){
        var op= $(this).val();
        $(this).val("");
        $("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" +op+ "</li>")
        }
    })
    
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();   
})

