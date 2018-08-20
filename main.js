// Раскрывающаяся навигация
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

// Вертикальный аккордеон в секции "Команда"
function accordeonTeam() {

  const memberBtn = document.querySelectorAll(".team__name");
  const teamList = document.querySelector(".team__list");

  teamList.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("team__name")) {

      for (let i = 0; i < memberBtn.length; i++) {
        if (memberBtn[i] != target) {
          memberBtn[i].classList.remove("team__name--active");
        }
      }

      if (target.classList.contains("team__name--active")) {
        target.classList.remove("team__name--active");
      } else {
        target.classList.add("team__name--active");
      }

    }
    return;
  });

}
accordeonTeam();

// Горизонтальный аккордеон в секции "Меню"
function accordeonMenu() {

  const menuBtn = document.querySelectorAll(".menu__cover");
  const menuList = document.querySelector(".menu__list");
  const menuSpan = document.querySelectorAll(".menu__type-title");

  menuList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("menu__cover")) {

      for (let i = 0; i < menuBtn.length; i++) {
        if (menuBtn[i] != target) {
          menuBtn[i].classList.remove("menu__cover--active");
        }
      }

      if (target.classList.contains("menu__cover--active")) {
        target.classList.remove("menu__cover--active");
      } else {
        target.classList.add("menu__cover--active");
      }

    }

    if (target.classList.contains("menu__type-title")) {

      for (let i = 0; i < menuBtn.length; i++) {
        if (menuBtn[i] != target.parentElement) {
          menuBtn[i].classList.remove("menu__cover--active");
        }
      }

      if (target.parentElement.classList.contains("menu__cover--active")) {
        target.parentElement.classList.remove("menu__cover--active");
      } else {
        target.parentElement.classList.add("menu__cover--active");
      }
      
    }
    return;
  });

}
accordeonMenu();

// Popup в секции "Отзывы"
function popup {

const reviewBtn = document.querySelectorAll(".buy-button--more");

for (let i = 0; i < reviewBtn.length; i++) {
reviewBtn[i].addEventListener("click", function(event) {
  var reviewTextContent = reviewBtn[i].previousElementSibling.textContent;
  var reviewTitle = reviewBtn[i].parentElement.children[0].textContent;
  document.body.appendChild(openPopup(reviewTextContent, reviewTitle));
  document.body.style.overflow = "hidden";
  var reviewPopupOpacity = document.querySelector(".review-popup");
  if (reviewPopupOpacity) {
    reviewPopupOpacity.style.opacity = getComputedStyle(reviewPopupOpacity).opacity + 1;
  }
});
}

function openPopup(content, title) {
  const reviewPopup = document.createElement("div");
  reviewPopup.classList.add("review-popup");

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review-popup__container");

  const reviewName = document.createElement("h3");
  reviewName.classList.add("review-popup__name");
  reviewName.textContent = title;

  const reviewContent = document.createElement("p");
  reviewContent.classList.add("review-popup__text");
  reviewContent.textContent = content;

  const closePopup = document.createElement("button");
  closePopup.classList.add("review-popup__close-btn");

  closePopup.addEventListener("click", function() {
    var reviewPopupOpacity = document.querySelector(".review-popup");
    function removePopup() {
      document.body.removeChild(reviewPopup);
    }
    if (reviewPopupOpacity) {
      reviewPopupOpacity.style.opacity = getComputedStyle(reviewPopupOpacity).opacity - 1;
    }
    setTimeout(removePopup, 600);
    document.body.style.overflow = "visible";
  });

  reviewPopup.appendChild(reviewContainer);
  reviewContainer.appendChild(reviewName);
  reviewContainer.appendChild(reviewContent);
  reviewContainer.appendChild(closePopup);

  return reviewPopup;
}

}

popup();


// Яндекс.Карты
ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [59.943, 30.322],
    zoom: 11
});
}