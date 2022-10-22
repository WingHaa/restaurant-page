import baconCheese from './img/bacon-cheeseburger.png'
import baconKing from './img/bacon-king.png'
import doubleCheese from './img/double-cheese-burger.png'
import poundKing from './img/single-quarter-pound-king.png'
import texasDoubleWhooper from './img/texas-double-whooper.png'
import whooper from './img/whooper.png'
import coffee from './img/bk-cafe-ice-coffee.png'
import coke from './img/diet-coke.png'
import drPepper from './img/dr-pepper.png'

export default function buildMenuPage() {
  const content = document.querySelector('#content')
  content.textContent = ''

  const burgerHeadingDiv = document.createElement('div')
  const burgerHeading = document.createElement('h1')
  burgerHeading.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  burgerHeading.textContent = 'Burger'
  burgerHeadingDiv.appendChild(burgerHeading)

  const burgerMenu = document.createElement('div')
  burgerMenu.classList = 'grid grid-cols-3 gap-3 justify-items-stretch mx-auto max-w-2xl'
  let burger = []
  for (let i = 0; i < 6; i++) {
    const burgerDiv = document.createElement('div')
    const img = document.createElement('img')
    const imgName = document.createElement('p')
    imgName.classList = 'text-center'
    burgerDiv.appendChild(img)
    burgerDiv.appendChild(imgName)
    burger.push(burgerDiv)
  }
  burger[0].firstChild.src = baconCheese
  burger[0].lastChild.textContent = 'Bacon Cheeseburger'
  burger[1].firstChild.src = baconKing
  burger[1].lastChild.textContent = 'Bacon King'
  burger[2].firstChild.src = doubleCheese
  burger[2].lastChild.textContent = 'Double Cheese Burger'
  burger[3].firstChild.src = poundKing
  burger[3].lastChild.textContent = 'Single Quarter Pound King'
  burger[4].firstChild.src = texasDoubleWhooper
  burger[4].lastChild.textContent = 'Texas Double Whooper'
  burger[5].firstChild.src = whooper
  burger[5].lastChild.textContent = 'Whooper'
  burger.forEach(element => burgerMenu.appendChild(element));
  
  const drinkHeadingDiv = document.createElement('div')
  const drinkHeading = document.createElement('h1')
  drinkHeading.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  drinkHeading.textContent = 'Drink'
  drinkHeadingDiv.appendChild(drinkHeading)

  const drinkMenu = document.createElement('div')
  drinkMenu.classList ='grid grid-cols-3 gap-3 justify-items-stretch mx-auto max-w-2xl'

  let drink = []
  for (let n = 0; n < 3; n++) {
    const drinkDiv = document.createElement('div')
    const img = document.createElement('img')
    img.classList = 'max-w-[216px] max-h-[216px]'
    const imgName = document.createElement('p')
    imgName.classList = 'text-center'
    drinkDiv.appendChild(img)
    drinkDiv.appendChild(imgName)
    drink.push(drinkDiv)
  }
  drink[0].firstChild.src = coffee
  drink[0].lastChild.textContent = 'Bk Cafe Ice Coffee'
  drink[1].firstChild.src = coke
  drink[1].lastChild.textContent = 'Diet Coke'
  drink[2].firstChild.src = drPepper
  drink[2].lastChild.textContent = 'Dr Pepper'
  drink.forEach(element => drinkMenu.appendChild(element));

  content.appendChild(burgerHeadingDiv)
  content.appendChild(burgerMenu)
  content.appendChild(drinkHeadingDiv)
  content.appendChild(drinkMenu)

}