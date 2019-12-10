var chk_btn = $('.chk_btn')
var save_btn = $('.save_btn')
var controls_options = $('.controls_options')
var wlt_btn = $('.wlt_btn')

$('.chk_btn , .save_btn').hide();
$(save_btn).prop('disabled',true)
$(wlt_btn).click(function(){
    $('.controls_options').hide(1000)
    $(chk_btn).show(1000);
    $(this).hide(1000)
    $(save_btn).show(1000)
})

let count=0;

$(chk_btn).change(function(e){
if(e.target.checked){
   count+=1;
    $(save_btn).text(`${count} / selected`)
    checkCount(count)
}
else{
    count -= 1;
    $(save_btn).text(`${count} / selected`)
    checkCount(count)
}
})


function checkCount(num){
    if (num === 3) {
        $(save_btn).prop('disabled', false)
        $(save_btn).text('Save').css({
            color: 'black'
        })
    }
    else if (num > 3) {
        $(save_btn).prop('disabled', true)
        $(save_btn).text('You should select 3 welcome tones only').css({
            color: 'red'
        })
    }
}