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
function popup() {

  const reviewBtn = document.querySelectorAll(".buy-button--more");

  for (let i = 0; i < reviewBtn.length; i++) {
    reviewBtn[i].addEventListener("click", function (event) {
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

    closePopup.addEventListener("click", function () {
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
function yaMap() {
ymaps.ready(init);

const yandexMap = document.querySelector("#map");

const placemarks = [
  {
    latitude: 59.890,
    longitude: 30.313,
    hintContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Бабушкина, д.63, 2</address>',
    balloonContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Бабушкина, д.63, 2</address>'
  },
  {
    latitude: 59.92173693,
    longitude: 30.35010566,
    hintContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Юрия Гагарина, д.51, 24</address>',
    balloonContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Юрия Гагарина, д.51, 24</address>'
  },
  {
    latitude: 59.96345679,
    longitude: 30.34955608,
    hintContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Худайбердина, д.4, 14</address>',
    balloonContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Худайбердина, д.4, 14</address>'
  },
  {
    latitude: 59.99219185,
    longitude: 30.26441204,
    hintContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Комсомольская, д.22/2, 24</address>',
    balloonContent: '<address class="footer__map-desc">Ресторан MrBurger: Санкт-Петербург, ул. Комсомольская, д.22/2, 24</address>'
  }
]

function init() {
  var map = new ymaps.Map(yandexMap, {
    center: [59.943, 30.322],
    zoom: 11,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  placemarks.forEach(function(obj) {
    var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: obj.hintContent,
      balloonContent: obj.balloonContent
    },
      {
        iconLayout: 'default#image',
        iconImageHref: '/images/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      });

      map.geoObjects.add(placemark);
  });  
}
}

yaMap();

// Отправка формы
function ajaxForm() {
const buyForm = document.querySelector(".buy__forms");
const submitButton = document.querySelector("#submitbutton");

buyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm(buyForm)) {
      const data = {
        name: buyForm.elements.name.value,
        phone: buyForm.elements.telephone.value,
        comment: buyForm.elements.comment.value,
        email: "example@mail.com"
      };

      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "https://webdev-api.loftschool.com/sendmail", true);
      xhr.send(JSON.stringify(data));
      xhr.addEventListener("load", function(event) {
        if (xhr.status < 400) {
          document.body.appendChild(openFormModal("Сообщение отправлено"));
          document.body.style.overflow = "hidden";
          var buyModalOpacity = document.querySelector(".buy-modal");
      if (buyModalOpacity) {
        buyModalOpacity.style.opacity = getComputedStyle(buyModalOpacity).opacity + 1;
      }
      } else {
          document.body.appendChild(openFormModal("Сообщение не отправлено"));
          document.body.style.overflow = "hidden";
          var buyModalOpacity = document.querySelector(".buy-modal");
      if (buyModalOpacity) {
        buyModalOpacity.style.opacity = getComputedStyle(buyModalOpacity).opacity + 1;
      }
      }
      });
    }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.telephone)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  } else {
    return true;
  }
}

function openFormModal(content) {
  const buyModal = document.createElement("div");
  buyModal.classList.add("buy-modal");

    const buyModalContainer = document.createElement("div");
    buyModalContainer.classList.add("buy-modal__container");

    const buyModalText = document.createElement("span");
    buyModalText.classList.add("buy-modal__text");
    buyModalText.textContent = content;

    const buyModalClose = document.createElement("button");
    buyModalClose.classList.add("buy-button");
    buyModalClose.textContent = "Закрыть";

    buyModalClose.addEventListener("click", function () {
      var buyModalOpacity = document.querySelector(".buy-modal");
      buyModalOpacity.style.opacity = getComputedStyle(buyModalOpacity).opacity - 1;

      function buyModalRemove() {
        document.body.removeChild(buyModal);
      }

      setTimeout(buyModalRemove, 600);
      document.body.style.overflow = "visible";
    });

    buyModal.appendChild(buyModalContainer);
    buyModalContainer.appendChild(buyModalText);
    buyModalContainer.appendChild(buyModalClose);

    return buyModal;
}
}
ajaxForm();

// Slider in menu section
function menuSlider() {

const leftBtn = document.querySelector(".products__control--left");
    const rightBtn = document.querySelector(".products__control--right");
    const items = document.querySelector(".products__slider");
    rightBtn.addEventListener("click", function () {
      if (parseInt(getComputedStyle(items).right) != 300) {
        items.style.right = parseInt(getComputedStyle(items).right) + 100 + "%";
      }
    });
    leftBtn.addEventListener("click", function () {
      if (parseInt(getComputedStyle(items).right) != 0) {
        items.style.right = parseInt(getComputedStyle(items).right) - 100 + "%";
      } 
    });

  }
  menuSlider();


