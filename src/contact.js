import manager from './img/fries-n-berg.jpg'
import chief from './img/heisenburger.jpg'
import waiter from './img/huge-burger.jpg'

export default function buildContactPage() {
  const content = document.querySelector('#content')
  content.textContent = ''

  const headingDiv = document.createElement('div')
  const heading = document.createElement('h1')
  heading.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  heading.textContent = 'Contact us'

  const list = document.createElement('div')
  for (let i = 0; i < 3; i++) {
    const profileDiv = document.createElement('div')
    profileDiv.classList = 'grid grid-cols-2 my-8'
    const infoDiv = document.createElement('div')
    infoDiv.classList = 'flex flex-col justify-center items-center'
    const info = []
    for (let x = 0; x < 4; x++) {
      const infoLine = document.createElement('p')
      infoLine.classList = 'text-2xl'
      if (x == 0) infoLine.classList = 'text-[#502314] text-4xl'
      info.push(infoLine)
    }
    info.forEach(element => infoDiv.appendChild(element))
    profileDiv.appendChild(infoDiv)
    const img = document.createElement('img')
    img.classList = 'max-w-[324px]'
    profileDiv.appendChild(img)
    list.appendChild(profileDiv)
  }

  list.childNodes[0].childNodes[0].childNodes[0].textContent = `Fries N'Berg`
  list.childNodes[0].childNodes[0].childNodes[1].textContent = 'Manager'
  list.childNodes[0].childNodes[0].childNodes[2].textContent = `777-777-7777`
  list.childNodes[0].childNodes[0].childNodes[3].textContent = 'dfnb@bbb.com'
  list.childNodes[0].childNodes[1].src = manager
  list.childNodes[1].childNodes[0].childNodes[0].textContent = `Heisenburger`
  list.childNodes[1].childNodes[0].childNodes[1].textContent = 'Chief'
  list.childNodes[1].childNodes[0].childNodes[2].textContent = `555-555-5555`
  list.childNodes[1].childNodes[0].childNodes[3].textContent = 'heisenb@bbb.com'
  list.childNodes[1].childNodes[1].src = chief
  list.childNodes[2].childNodes[0].childNodes[0].textContent = `Huge Burger`
  list.childNodes[2].childNodes[0].childNodes[1].textContent = 'Waiter'
  list.childNodes[2].childNodes[0].childNodes[2].textContent = `333-333-3333`
  list.childNodes[2].childNodes[0].childNodes[3].textContent = 'bigb@bbb.com'
  list.childNodes[2].childNodes[1].src = waiter

  content.appendChild(headingDiv)
  content.appendChild(list)
}