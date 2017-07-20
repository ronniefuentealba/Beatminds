$('body').scrollspy({ target: '#navbarNavDropdown' });
$('window').on('activate.bs.scrollspy', function () {
  console.log("spy")
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
