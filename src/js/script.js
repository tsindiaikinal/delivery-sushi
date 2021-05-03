(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // preloader...
  });
  window.onload = function () {
    if (document.querySelector(".swiper-container")) {
      const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: false,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
          // type: "progressbar",
        },
        keyboard: {
          enabled: true,
          pageUpDown: true,
        },
        autoHeight: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        // Navigation arrows
        navigation: true,

        // And if we need scrollbar
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });
    }
  };

  /*  console.log(location);
  console.log(location.origin);
  console.log(location.host);
  console.log(location.hostname);
  console.log(location.port);
  console.log(location.protocol);
  console.log(location.pathname);
  console.log(navigator.appName);
  console.log(navigator.appVersion);
  console.log(navigator.appCodeName);
  console.log(navigator.cookieEnabled);
  console.log(navigator.platform);
  console.log(navigator.product);
  console.log(navigator.userAgent);
  console.log(navigator.language);
  console.log(navigator.onLine);
  console.log(navigator.javaEnabled());
  console.log(document.cookie);
  function newDoc() {
    window.location.assign("https://private-verses.pp.ua");
  }
  if (document.getElementById("openwin")) {
    document.getElementById("openwin").addEventListener("click", () => {
      console.log("win");
      console.log(window.screen);
      window.open;
      newDoc();
      history.back();
    });
  } */
})();
