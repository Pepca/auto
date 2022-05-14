document.addEventListener('DOMContentLoaded', event => {
  const popups = document.querySelectorAll('.popup')
  const dataPopupTargets = document.querySelectorAll('[data-popup]')

  const bodyLock = () => document.body.classList.add('_lock')

  const bodyUnlock = () => setTimeout(() => document.body.classList.remove('_lock'), 300)

  if (popups.length > 0) {
    const closePopup = (currentPopup, event) => {
      currentPopup.classList.remove('_popup-open')

      bodyUnlock()
    }

    popups.forEach(popup => {
      const popupInner = popup.querySelector('.popup__inner')
      const popupClose = popup.querySelector('.popup__close')

      popup.addEventListener('click', closePopup.bind(null, popup))
      popupInner.addEventListener('click', event => event.stopPropagation())
      popupClose.addEventListener('click', closePopup.bind(null, popup))
    })
  }

  if (dataPopupTargets.length > 0) {
    dataPopupTargets.forEach(popupTarget => {
      popupTarget.addEventListener('click', event => {
        const attrValue = event.currentTarget.getAttribute('data-popup')
        const currentPopup = document.getElementById(attrValue)

        currentPopup.classList.add('_popup-open')

        bodyLock()
      })
    })
  }

  if (popups.length > 0 && dataPopupTargets.length > 0) {
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth

    document.body.style.setProperty('--scrollbarWidth', scrollbarWidth + 'px')
  }
})