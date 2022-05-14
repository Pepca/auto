document.addEventListener('DOMContentLoaded', event => {
  const telephoneInputs = document.querySelectorAll('input[type=tel]')
  const cardNumberInputs = document.querySelectorAll('input._card-number')
  const cardDateInputs = document.querySelectorAll('input._card-date')
  const cardCVVInputs = document.querySelectorAll('input._card-cvv')
  const passportSeries = document.querySelectorAll('input._passport-series')
  const passportNumber = document.querySelectorAll('input._passport-number')

  const blurHandlerCustomInputs = (event) => {
    const target = event.target

    if (target.value === '') target.parentElement.classList.remove('_typing')
  }

  if (telephoneInputs.length > 0) {
    telephoneInputs.forEach(inputTel => {
      const mask = IMask(inputTel, {
        mask: '+{7} (000) 000-00-00'
      })

      inputTel.addEventListener('blur', blurHandlerCustomInputs)
    })
  }

  if (cardNumberInputs.length > 0) {
    cardNumberInputs.forEach(cardNumberInput => {
      const mask = IMask(cardNumberInput, {
        mask: '0000 0000 0000 0000'
      })

      cardNumberInput.addEventListener('blur', blurHandlerCustomInputs)
    })
  }

  if (cardDateInputs.length > 0) {
    cardDateInputs.forEach(cardDateInput => {
      const mask = IMask(cardDateInput, {
        mask: '00/00'
      })

      cardDateInput.addEventListener('blur', blurHandlerCustomInputs)
    })
  }

  if (cardCVVInputs.length > 0) {
    cardCVVInputs.forEach(cardCVVInput => {
      const mask = IMask(cardCVVInput, {
        mask: '000'
      })

      cardCVVInput.addEventListener('blur', blurHandlerCustomInputs)
    })
  }

  if (passportSeries.length > 0) {
    passportSeries.forEach(seriesInput => {
      const mask = IMask(seriesInput, {
        mask: '0000'
      })

      seriesInput.addEventListener('blur', blurHandlerCustomInputs)
    })
  }

  if (passportNumber.length > 0) {
    passportNumber.forEach(passportNumberInput => {
      const mask = IMask(passportNumberInput, {
        mask: '000000'
      })

      passportNumberInput.addEventListener('blur', blurHandlerCustomInputs)
    })
  }
})