$(document).ready(function() {
  initMenuCollapsible();
  initCardCollapsible();
});

function initCardCollapsible () {
  $('.caret').on('click', function (evt) {
    $(this).toggleClass('active')
    var cardHeader = $(this).parent();
    var cardBody = $(cardHeader).next();
    $(cardBody[0]).slideToggle()
  })
}

function initMenuCollapsible () {
  $('.nav-item.has-child').on('click', function (evt) {
    var _self = $(this)
    if (_self.hasClass('nav-item')) {
      _self.children('a.nav-link').toggleClass('active')

      if (_self.hasClass('has-child')) {
        var nav = _self.find('.is-child')
        $(nav).slideToggle()
      }
    }
  })
}
