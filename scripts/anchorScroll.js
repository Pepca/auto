document.addEventListener('DOMContentLoaded', event => {
  const headerBlock = document.querySelector('.header')
  const dataScrollAnchElements = document.querySelectorAll('[data-scroll-anch]')

  if (dataScrollAnchElements.length > 0) {
    dataScrollAnchElements.forEach(scrollAnimElement => {
      scrollAnimElement.addEventListener('click', (event) => {
        const attrValue = event.currentTarget.getAttribute('data-scroll-anch')
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
})