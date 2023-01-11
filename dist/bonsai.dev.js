"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var popUpUlEl = document.querySelectorAll('.main-ul');
  popUpUlEl.forEach(function (eachUl) {
    eachUl.addEventListener('click', function (e) {
      var currentLi = e.currentTarget;
      currentLi.childNodes[5].classList.toggle('active-media');
    });
  });
  var popUpMobileEl = document.querySelector('.pop-up-mobile');
  var popUpMobileBtn = document.querySelector('.main-nav .fa-bars');
  popUpMobileBtn.addEventListener('click', function () {
    popUpMobileEl.classList.toggle('active-pop-up');
  });
  var toggleEl = document.querySelector('#check');
  var threeCardsEl = document.querySelector('.three-money-cards');
  toggleEl.checked = true;
  var starterNumber = document.querySelector('#starterNumber');
  var professionalNumber = document.querySelector('#professionalNumber');
  var businessNumber = document.querySelector('#businessNumber');
  toggleEl.addEventListener('input', function () {
    changeMode();
  });
  var questionsEl = document.querySelectorAll('.question-item .h3-ques');
  questionsEl.forEach(function (eachQues) {
    eachQues.addEventListener('click', function (e) {
      var currentQuest = e.currentTarget;

      if (currentQuest.id === 'ques1') {
        currentQuest.parentNode.childNodes[3].classList.toggle('ques-on');
      }

      if (currentQuest.id === 'ques2') {
        currentQuest.parentNode.childNodes[3].classList.toggle('ques-on');
      }

      if (currentQuest.id === 'ques3') {
        currentQuest.parentNode.childNodes[3].classList.toggle('ques-on');
      }

      if (currentQuest.id === 'ques4') {
        currentQuest.parentNode.childNodes[3].classList.toggle('ques-on');
      }
    });
  });
  var mainNavEl = document.querySelector('.main-nav');
  document.addEventListener('scroll', function () {
    if (scrollY > 1) {
      mainNavEl.classList.add('main-nav-full');
    } else {
      mainNavEl.classList.remove('main-nav-full');
    }
  });
  var productLi = document.querySelector('#productNormalNav');
  var industriesLi = document.querySelector('#industriesNormalNav');
  var templatesLi = document.querySelector('#templatesNormalNav');
  var popUpProductEl = document.querySelector('#pop-up-product');
  var popUpindustriesEl = document.querySelector('#pop-up-industries');
  var popUptemplatesEl = document.querySelector('.pop-up-third');
  productLi.addEventListener('mouseover', function () {
    popUpProductEl.classList.add('active');
    popUpindustriesEl.classList.remove('active');
    popUptemplatesEl.classList.remove('active');
    popUpProductEl.addEventListener('mouseleave', function () {
      popUpProductEl.classList.remove('active');
    });
  });
  industriesLi.addEventListener('mouseover', function () {
    popUpindustriesEl.classList.add('active');
    popUpProductEl.classList.remove('active');
    popUptemplatesEl.classList.remove('active');
    popUpindustriesEl.addEventListener('mouseleave', function () {
      popUpindustriesEl.classList.remove('active');
    });
  });
  templatesLi.addEventListener('mouseover', function () {
    popUptemplatesEl.classList.add('active');
    popUpProductEl.classList.remove('active');
    popUpindustriesEl.classList.remove('active');
    popUptemplatesEl.addEventListener('mouseleave', function () {
      popUptemplatesEl.classList.remove('active');
    });
  });

  function changeMode() {
    if (toggleEl.checked) {
      starterNumber.textContent = '$ 17';
      professionalNumber.textContent = '$ 32';
      businessNumber.textContent = '$ 52';
    } else {
      starterNumber.textContent = '$ 24';
      professionalNumber.textContent = '$ 39';
      businessNumber.textContent = '$ 79';
    }
  }
});