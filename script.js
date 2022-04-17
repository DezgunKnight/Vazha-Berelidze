
$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });


  let burgerButton = document.getElementById('toggleButton');
  let navBar = document.getElementById('navigation-ul');
  
  
  burgerButton.addEventListener('click', function() {
      navBar.classList.toggle('toggle');
      burgerButton.classList.toggle('active');
  })