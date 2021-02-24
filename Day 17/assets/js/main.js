const sidebar = document.getElementsByClassName("sidebar")[0];

function collapseSidebar() {
  sidebar.classList.toggle("expand");
}

var buttonHover = function () {
  $(".button").each(function () {
    $(this).mouseenter(function (e) {
      var parentOffset = $(this).offset();

      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).find(".hover-effect").css({ left: relX, top: relY });
    });

    $(this).mouseleave(function (e) {
      var parentOffset = $(this).offset();

      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).find(".hover-effect").css({ left: relX, top: relY });
    });
  });
};

buttonHover();

function showNotification() {
  document.getElementById("notification-menu").classList.toggle("show__noti");
  document.getElementById("info-menu").classList.remove("show__info");
}

function showInfo() {
  document.getElementById("info-menu").classList.toggle("show__info");
  document.getElementById("notification-menu").classList.remove("show__noti");
}
