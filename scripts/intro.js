document.addEventListener('DOMContentLoaded', event => {
  const headerBlock = document.querySelector('.header')
  const introBlock = document.querySelector('.intro')
  const pageUpBtn = document.querySelector('.page-up')
  const introArrow = document.querySelector('.intro__arrow')

  if (introArrow) {
    introArrow.addEventListener('click', (event) => {
      window.scrollTo({
        top: introBlock.offsetHeight, behavior: 'smooth'
      })
    })
  }

  if (pageUpBtn) {
    window.addEventListener('scroll', (event) => {
      pageUpBtn.classList.toggle('_show', window.scrollY > introBlock.offsetHeight)
    })

    pageUpBtn.addEventListener('click', (event) => {
      window.scrollTo({
        top: 0, behavior: 'smooth'
      })
    })
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
})