new fullpage('#fullpage', {
    autoscrolling:true,
    navigation: true,
    sectionsColor:['#ff6161', '#efe2d6', 
    '#212360','#efe2d6', 
    '#212360','#efe2d6', 
    '#212360','#efe2d6','#efe2d6'],
})

$('input[type="submit"]').mousedown(function(){
    $(this).css('background', '#2ecc71');
  });
  $('input[type="submit"]').mouseup(function(){
    $(this).css('background', '#1abc9c');
  });
  
  $('#loginform').click(function(){
    $('.login').fadeToggle('slow');
    $(this).toggleClass('green');
  });

  document.querySelector("#page").addEventListener('click', (e, checkbox = document.querySelector('input'))=>{ 
    if(checkbox.checked) { checkbox.checked = false; e.stopPropagation(); }
});
document.querySelector("#section").addEventListener('click', (e, checkbox = document.querySelector('input'))=>{ 
  if(checkbox.checked) { checkbox.checked = false; e.stopPropagation(); }
});