function hamburgerMenu() {

  const hambMenuOpenBtn = document.querySelector(".header__hambmenu-btn");
  const hambMenuCloseBtn = document.querySelector(".hambmenu__close-btn");
  const hambmenu = document.querySelector(".hambmenu");
  const menuLink = document.querySelectorAll(".hambmenu__link");

  function displayNone() {
    hambmenu.style.display = "none";
  }

  hambMenuOpenBtn.addEventListener("click", function () {
    hambmenu.style.display = "block";
    hambmenu.style.opacity = getComputedStyle(hambmenu).opacity + 1;
    document.body.style.overflow = "hidden";
  });

  hambMenuCloseBtn.addEventListener("click", function () {
    hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;
    document.body.style.overflow = "visible";
    setTimeout(displayNone, 600);
  });


  for (let i = 0; i < menuLink.length; ++i) {
    menuLink[i].addEventListener("click", function () {
      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;
      document.body.style.overflow = "visible";
      setTimeout(displayNone, 600);
    });
  }

}
hamburgerMenu();

