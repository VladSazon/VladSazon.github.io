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
   $(this).addClass('del');
  
   localStorage.removeItem("todoist");
 }); 
});
  // localStorage.removeItem("todoist"); 
})(); 
