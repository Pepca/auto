document.addEventListener('DOMContentLoaded', event => {
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

        setTimeout(() => {
          filter.classList.add('_loaded')
        }, 250)

        filterHead.addEventListener('click', (event) => {
          filter.classList.toggle('_hide-filter')
        })
      })
    }
  }
})