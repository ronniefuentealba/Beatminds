$('body').scrollspy({ target: '#navbarNavDropdown' });
$('window').on('activate.bs.scrollspy', function () {
  console.log("spy")
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  if($('.nav-item.dropdown').hasClass('show')){
    $('.nav-link.dropdown-toggle').addClass('fa-rotate-180');
  }
  else{
    $('.nav-link.dropdown-toggle').removeClass('fa-rotate-180');
  }
});
