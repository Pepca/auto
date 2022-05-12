const profileSubmenuTarget = document.querySelector('._profile-submenu-target')
const profileSubmenu = document.querySelector('._profile-submenu')
const inputBlock = document.querySelectorAll('.input-block')
const inputTel = document.querySelectorAll('input[type=tel]')
const dataScrollAnimElements = document.querySelectorAll('[data-scroll-anim]')
const headerBlock = document.querySelector('.header')
const introBlock = document.querySelector('.intro')
const productFilters = document.querySelector('.product-filers')

if (productFilters) {
  const productFiltersItems = productFilters.querySelectorAll('.item-product-filters')

  if (productFiltersItems.length > 0) {
    productFiltersItems.forEach(filter => {
      const filterHead = filter.querySelector('.item-product-filters__head')
      const filterBody = filter.querySelector('.item-product-filters__body')

      const bodyFilterHeight = filterBody.offsetHeight

      filter.style = `--body-height: ${bodyFilterHeight}px`
      filter.classList.add('_hide-filter')

      filterHead.addEventListener('click', (event) => {
        filter.classList.toggle('_hide-filter')
      })
    })
  }
}

if (introBlock) {
  const currentScroll = window.scrollY
  const introHeight = introBlock.offsetHeight / 4

  headerBlock.classList.toggle('_recolor', currentScroll >= introHeight)

  document.addEventListener('scroll', (event) => {
    const currentScroll = window.scrollY
    const introHeight = introBlock.offsetHeight / 4

    headerBlock.classList.toggle('_recolor', currentScroll >= introHeight)
  })
}

if (dataScrollAnimElements.length > 0) {
  dataScrollAnimElements.forEach(scrollAnimElement => {
    scrollAnimElement.addEventListener('click', (event) => {
      const attrValue = event.currentTarget.getAttribute('data-scroll-anim')
      const scrollTargetBlock = document.getElementById(attrValue)

      if (!scrollTargetBlock) return

      const headerBlockHeight = headerBlock.offsetHeight + 20

      const {top} = scrollTargetBlock.getBoundingClientRect()

      const currentScrollValue = (window.scrollY + top) - headerBlockHeight

      window.scrollTo({
        top: currentScrollValue, behavior: 'smooth'
      })

    })
  })
}


profileSubmenuTarget.addEventListener('click', (event) => {
  event.preventDefault()
  profileSubmenu.classList.toggle('_active-submenu')
})

profileSubmenu.addEventListener('click', (event) => event.stopPropagation())

document.addEventListener('click', (event) => {
  if (!event.target.closest('._profile-submenu-target') && profileSubmenu.classList.contains('_active-submenu')) {
    profileSubmenu.classList.remove('_active-submenu')
  }
})

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

if (inputTel.length > 0) {
  const maskTelInput = (event) => {
    const pos = event.target.selectionStart

    if (pos < 3) event.target.value = '+7 '

    if (event.keyCode === 8) {
      event.target.value = '+7 ' + event.target.value.substr(3)
    }

    if (event.keyCode === 47) {
      event.target.value = '+7 ' + event.target.value.substr(3)
    }

  }

  inputTel.forEach(input => {
    input.addEventListener('input', maskTelInput)
    input.addEventListener('keydown', maskTelInput)

    input.addEventListener('focus', (event) => {
      event.target.value = '+7 ' + event.target.value.substr(3)
      event.target.parentElement.classList.add('_typing')
    })

    input.addEventListener('blur', (event) => {
      if (event.target.value === '+7 ') {
        event.target.value = ''
        event.target.parentElement.classList.remove('_typing')
      }
    })
  })

}
