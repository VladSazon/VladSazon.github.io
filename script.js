$(document).ready(function(){
$('#btn').on('click', function() {
  $('#btn').on('click', function(event) {
    $('#submit').val("")
  })

  var entrada = $('#submit').val();
  if ($("#submit").val() == '') {
    return false;
  } 
var RemoveListItem = function(src)
{
 
};
  $('#list').prepend('<li>' + entrada + '</li>');
  $('#list li').click(RemoveListItem); 
 localStorage.setItem("todoist", $('#list').html());
  $('#submit').val("");
  $('#list').listview('refresh');
})

$(function(){
  $('#list').html(localStorage.getItem("todoist"));
$(document).on('click', 'li', function(){
    $(this).toggleClass('del');
   localStorage.setItem("todoist", $('#list').html());
   
 }); 
  $('li').on('swipe', function(){
   $(this).remove();
   localStorage.setItem("todoist", $('#list').html());
   
 }); 
});
})();
document.write(VK.Share.button({
  url: 'https://vladsazon.github.io',
  title: 'Хороший сайт',
  description: 'Это мой собственный сайт, я его очень долго делал',
  image: 'https://images.unsplash.com/reserve/wrev1ljvQ6KlfyljCQG0_lion.jpg',
  noparse: true
}));
