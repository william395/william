/*
*@author:William Fu
*@e-mail:william395@qq.com
*@date:2012-2-4
*@version:1.00
*/
var theInt = null;
var curclicked = 0;
$(function()
{
  t(0);
  $('.nav div').mouseover(function(){
    var j = $(this).index();
    if($('#this_pic').attr('src') == $('#pic_list img').eq(j).attr('src')) return;
    t($('.nav div').index($(this)));
  });
});

t = function(i)
{
  clearInterval(theInt);
  if( typeof i != 'undefined' )
  curclicked = i;
    $('#this_pic').fadeOut(0).fadeIn(500).attr('src',$('#pic_list img').eq(i).attr('src'));  
  theInt = setInterval(function ()
  {
    i++;
    if (i > $('#pic_list img').length - 1) {i = 0};
    $('#this_pic').fadeOut(0).fadeIn(500).attr('src',$('#pic_list img').eq(i).attr('src'));
  },3000)
}