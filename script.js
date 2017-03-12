
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
   localStorage.setItem("todoist", $('#list').html());
   //localStorage.removeItem("todoist");
 }); 
});
  // localStorage.removeItem("todoist"); 
})();























/*$(document).ready(function(){
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
  $('#list').prepend('<li id="mydata">' + entrada + '</li>');
  $('#list li').click(RemoveListItem); 
 localStorage.setItem(localStorage.length, $('li').html());
  $('#submit').val("");
  $('#list').listview('refresh');
})

$(function(){
  $.each(localStorage, function(key, value){
    $('#list').append(key +" " + value);
})
 for(var i in localStorage) {
  $('#list').append(localStorage.getItem(i));
}
for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    $('#listview').append(" "+ value );
}
 for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  $('#list').html( localStorage.key( i ) + ": " + localStorage.getItem( localStorage.key( i ) ) );
}
   var foo ='';
    for (var i = 0, len = localStorage.length; i < len; i++) {
       foo += localStorage.getItem(localStorage.key(i));
    }
   //con
    $('#list').html(foo);
  
 


  $(document).on('click', '#mydata', function(){
    
   $(this).toggleClass('del');
    $('li').html(localStorage.removeItem(localStorage.key(i)));
 
   
 }); 
  $(document).on('click', 'li', function(){
 $('#list').html(localStorage.removeItem(localStorage.key(i)));
});
});

  // localStorage.removeItem("todoist"); 
})(); */