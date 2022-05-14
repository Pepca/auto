document.addEventListener('DOMContentLoaded', event => {
  const bankCardItems = document.querySelectorAll('.item-cards-block')

  if (bankCardItems.length > 0) {
    bankCardItems.forEach(itemCard => {
      const itemCardBtn = itemCard.querySelector('.user-data-card__btn')

      itemCardBtn.addEventListener('click', (event) => {
        itemCard.classList.toggle('_show-info')
      })
    })
  }
})