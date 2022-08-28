const lovers = [
  {
    name: 'Сёмка',
    percentageOfLove: 0.7
  },
  {
    name: 'Сашка',
    percentageOfLove: 0.12568755
  },
  {
    name: 'Анька',
    percentageOfLove: 0.12547555
  }
]

lovers.sort((a, b) => a.percentageOfLove - b.percentageOfLove)

const loveList = document.querySelector('.love-list')

lovers.forEach(lover => {
  const loveItem = document.createElement('li')
  loveItem.classList.add('love-item')
  loveItem.innerHTML = `
    <span class="love-name">${lover.name}</span>
    <div class="love-heart"></div>
    <span class="love-percentage">${lover.percentageOfLove}</span>
  `
  loveList.append(loveItem)
})

document.querySelectorAll('.love-heart').forEach((heart, i) => {
  heart.style.animationDuration = `${lovers[i].percentageOfLove * 2}s`
  heart.style.right = '20px'
})