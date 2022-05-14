document.addEventListener('DOMContentLoaded', event => {
  const customSelects = document.querySelectorAll('.custom-select-input')

  if (customSelects.length > 0) {
    customSelects.forEach(customSelect => {
      const hiddenInput = customSelect.querySelector('input')
      const customSelectHead = customSelect.querySelector('.custom-select-input__head')
      const customSelectTitle = customSelect.querySelector('.custom-select-input__title')
      const optionsCustomSelect = customSelect.querySelectorAll('.options-custom-select__item')

      customSelectHead.addEventListener('click', event => {
        customSelect.classList.toggle('_expend-select')
      })

      if (optionsCustomSelect.length > 0) {
        optionsCustomSelect.forEach(optionCustomSelect => {
          optionCustomSelect.addEventListener('click', event => {
            customSelectTitle.textContent = event.currentTarget.textContent
            hiddenInput.value = event.currentTarget.textContent

            customSelect.classList.remove('_expend-select')
          })
        })
      }
    })

    document.addEventListener('click', event => {
      customSelects.forEach(customSelects => {

        if (customSelects.classList.contains('_expend-select') && !event.target.closest('.custom-select-input')) customSelects.classList.remove('_expend-select')
      })
    })
  }
})