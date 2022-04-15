
$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });


  let navBar = document.getElementById('navigation');
  let burgerBar = document.getElementById('burgerBar');
  burgerBar.addEventListener('click',function() {
      navBar.classList.toggle('activenav');
  } )