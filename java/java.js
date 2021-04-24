$(document).ready(function() {
2
​
3
  $('.flipper').on('click', function () {
4
    $(this).find('.flipper-card').toggleClass('flipper-is-flipped');
5
  });
6
​
7
});
8
