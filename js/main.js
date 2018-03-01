$(document).ready(function() {
  initCardCollapsible();
});

function initCardCollapsible() {
  $('.caret').on('click', function (evt) {
    $(this).toggleClass('fa-caret-up', 'fa-caret-down')
    var cardHeader = $(this).parent();
    var cardBody = $(cardHeader).next();
    $(cardBody[0]).toggle()
  })
}
