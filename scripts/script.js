document.addEventListener('DOMContentLoaded', event => {
  const profileSubmenuTarget = document.querySelector('._profile-submenu-target')
  const profileSubmenu = document.querySelector('._profile-submenu')
  const inputBlock = document.querySelectorAll('.input-block')

  const customTextInputs = document.querySelectorAll('input[type=text]._only-letters')
  const customNumberInputs = document.querySelectorAll('input[type=text]._only-numbers')

  if (profileSubmenuTarget) {
    profileSubmenuTarget.addEventListener('click', (event) => {
      event.preventDefault()
      profileSubmenu.classList.toggle('_active-submenu')
    })
  }

  if (profileSubmenu) {
    profileSubmenu.addEventListener('click', (event) => event.stopPropagation())
  }

  if (profileSubmenuTarget && profileSubmenu) {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('._profile-submenu-target') && profileSubmenu.classList.contains('_active-submenu')) {
        profileSubmenu.classList.remove('_active-submenu')
      }
    })
  }

  if (inputBlock.length > 0) {
    inputBlock.forEach(block => {
      const inputTarget = block.querySelectorAll('input')

      if (inputTarget.length > 1) {
        inputTarget.forEach(input => {
          input.addEventListener('input', (event) => {
            const parentItem = event.target.parentElement
            parentItem.classList.toggle('_typing', event.target.value !== '')
          })
        })
      } else {
        inputTarget[0].addEventListener('input', (event) => {
          const parentItem = event.target.parentElement
          parentItem.classList.toggle('_typing', event.target.value !== '')
        })
      }
    })
  }

  if (customTextInputs.length > 0) {
    const maskCustomTextInputs = (event) => {
      event.target.value = event.target.value.replace(/\d/g, '')

      if (event.type === 'blur' && event.target.value === '') {
        event.target.parentElement.classList.remove('_typing')
      }
    }

    customTextInputs.forEach(customTextInput => {
      customTextInput.addEventListener('input', maskCustomTextInputs)
      customTextInput.addEventListener('blur', maskCustomTextInputs)
    })
  }

  if (customNumberInputs.length > 0) {
    const maskCustomNumberInputs = (event) => {
      event.target.value = event.target.value.replace(/\D/g, '')

      if (event.type === 'blur' && event.target.value === '') {
        event.target.parentElement.classList.remove('_typing')
      }
    }

    customNumberInputs.forEach(customNumberInput => {
      customNumberInput.addEventListener('input', maskCustomNumberInputs)
      customNumberInput.addEventListener('blur', maskCustomNumberInputs)
    })
  }
})