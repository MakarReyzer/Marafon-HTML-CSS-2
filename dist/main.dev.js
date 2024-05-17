"use strict";

var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left'
  }
});
var map;

function initMap() {
  var _ref, Map;

  return regeneratorRuntime.async(function initMap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(google.maps.importLibrary("maps"));

        case 2:
          _ref = _context.sent;
          Map = _ref.Map;
          map = new Map(document.getElementById("map"), {
            center: {
              lat: -34.397,
              lng: 150.644
            },
            zoom: 8
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

initMap();
//# sourceMappingURL=main.dev.js.map
