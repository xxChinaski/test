"use strict"
/* import LeaderLine from "../js/leader-line.min.js" */

window.onload = function() {

  document.querySelector('.preloader').classList.add('-hide')

  const trigger = document.querySelector('.composition__trigger')
  const compBlocks = document.querySelectorAll('.composition-item')

  let lines = []

  compBlocks.forEach((item, index) => {
    let start = ''
    let end = ''

    if (index < 3) {
      start = 'left'
      end = 'right'
    } else {
      start = 'right'
      end = 'left'
    }

    if (window.innerWidth < 768) {
      switch (index) {
        case 0:
          start = 'top'
          end = 'bottom'
          break
        case 1:
          start = 'top'
          end = 'bottom'
          break
        case 2:
          start = 'top'
          end = 'bottom'
          break
        case 3:
          start = 'top'
          end = 'bottom'
          break
        case 4:
          start = 'top'
          end = 'bottom'
          break
        case 5:
          start = 'top'
          end = 'bottom'
          break
      }
    }

    let itemLine = new LeaderLine(
      trigger,
      item,
      {
        path: 'fluid',
        startSocket: start,
        endSocket: end,
        endPlug: 'behind',
        size: 1,

        gradient: true,
        startPlugColor: 'rgba(39, 56, 80, 0)',
        endPlugColor: 'rgba(39, 56, 80, 0.35)',
        hide: true,
      }
    )
    lines.push(itemLine)
  })

  trigger.addEventListener('click', () => {
    /* document.querySelector('.composition__tip').style.display = 'none' */
    if (trigger.matches('.-active')) {
      document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })
    }
    lines.forEach((item, index) => {
      item.show('draw', { duration: 700 + index * 200 })
    })

    compBlocks.forEach((item) => {
      item.classList.remove('-hidden')
    })

    trigger.classList.add('-active')
  })

  const swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 50,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".swiper__right",
      prevEl: ".swiper__left",
    },
  });

  const timerElem = document.querySelector('.order__timer > p > span')
  const initTime = Date.parse(new Date()) + 1800000

  const updateClock = () => {
    const total = initTime - Date.parse(new Date()),
      minutes = Math.floor((total / 1000 / 60) % 60),
      seconds = Math.floor((total / 1000) % 60)

    let textMinutes = minutes,
      textSeconds = seconds

    if (minutes < 10) {
      textMinutes = `0${minutes}`
    }
    if (seconds < 10) {
      textSeconds = `0${seconds}`
    }

    timerElem.textContent = `${textMinutes}:${textSeconds}`

    if (minutes <= 0 && seconds <= 0) {
      timerElem.textContent = `00:00`
    }

  }
  const clockInterval = setInterval(updateClock, 1000)

  const inputs = document.querySelectorAll('input')
  inputs.forEach((item) => {
    const inputTip = item.parentElement.querySelector('.form-element__tip')
    item.addEventListener('focus', (e) => {
      inputTip.classList.add('-show')
    })
    item.addEventListener('blur', (e) => {
      inputTip.classList.remove('-show')
    })
  })

  const buttons = document.querySelectorAll('a.btn')

  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })
    })
  })

  const resizeFunc = () => {


    if (window.innerWidth < 768) {
      $(".promo__item").hide()
      $(".promo__item:first").show()

      $(".mobile-nav__trigger ").click(function() {
        $(".promo__item").hide()
        let activeTab = $(this).attr('rel')
        $("#" + activeTab).fadeIn()
        if ($(this).attr("rel") == "tab2") {
          $('.mobile-nav__tabs').addClass('slide-1')
          $('.mobile-nav__tabs').removeClass('slide-2')
          console.log('tab2')
        } else if ($(this).attr("rel") == "tab3") {
          $('.mobile-nav__tabs').addClass('slide-2')
          $('.mobile-nav__tabs').removeClass('slide-1')
          console.log('tab3')
        } else {
          $('.mobile-nav__tabs').removeClass('slide-1')
          $('.mobile-nav__tabs').removeClass('slide-2')
          console.log('tab1')
        }
        $('.mobile-nav li').removeClass('active')
        $(this).addClass('active')
      })
    } else {
      $(".promo__item").show()
    }
  }

  function stripNonNumeric() {
    this.value = this.value.replace(/\D+/g, '');
  }

  const inputPhone = document.querySelector(".order__phone");
  if (inputPhone.addEventListener) {
    inputPhone.addEventListener("input", stripNonNumeric);
  } else if (inputPhone.attachEvent) {
    inputPhone.attachEvent("oninput", stripNonNumeric);
  }
  resizeFunc()
  window.onresize = resizeFunc;
}
