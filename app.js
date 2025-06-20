//Adding new task in todo
$('input').keypress(function(e){
    // console.log(e);
    if(e.which===13){
        const todoText = $(this).val();
        // console.log(todoText);
       $('#list').append(`<li>${todoText}<span class="delete">❌</span></li>`);
       $(this).val("");
        // $("span").css("font-size", "14px");
    }
})

//mark as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
    $(this).find('.tick').remove();
    if ($(this).hasClass('completed')) {
        $(this).append('<span class="tick"> ✅</span>');
        $(this).css("border-color", "green");
    }

})

//delete todo
$('ul').on('click','span',function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
})

//toggle input
$('#plus').click(function(){
    $('input').fadeToggle();
})










