import home from "./home"
import menu from "./menu"
import contact from "./contact"

window.addEventListener('load', setup)

function setup() {
  document.body.classList = 'bg-[#f5ebdc]'

  const headerDiv = document.createElement('div')
  headerDiv.classList = 'header h-[78px] py-[30px]'
  const headerUl = document.createElement('ul')
  headerUl.classList = 'grid grid-cols-3 gap-3 justify-items-stretch mx-auto max-w-2xl'
  let headings = []
  for (let i = 0; i < 3; i++) {
    const heading = document.createElement('li')
    heading.classList = 'text-lg font-medium text-center'
    headings.push(heading)
  }
  headings[0].textContent = 'Home'
  headings[0].classList.add('home')
  headings[1].textContent = 'Menu'
  headings[1].classList.add('menu')
  headings[2].textContent = 'Contact'
  headings[2].classList.add('contact')
  headings.forEach(heading => headerUl.appendChild(heading))
  headerDiv.appendChild(headerUl)

  const contentDiv = document.createElement('div')
  contentDiv.id = 'content'
  contentDiv.classList = 'min-h-[86%] mx-auto max-w-[648px]'

  const footerDiv = document.createElement('div')
  footerDiv.classList = 'footer h-[56px] py-[15px] grid grid-cols-2 justify-items-center'
  const bkLink = document.createElement('a')
  bkLink.classList = 'text-[#502314] font-medium'
  bkLink.href = 'https://www.bk.com'
  bkLink.textContent = `Images and colorscheme are properties of Burger King
      - www.bk.com`
  const disclaimerSpan = document.createElement('span')
  disclaimerSpan.classList = 'text-[#502314] font-medium'
  disclaimerSpan.textContent = `This website was made purely for self educational purpose and has no
      commercial value`

  footerDiv.appendChild(bkLink)
  footerDiv.appendChild(disclaimerSpan)

  document.body.appendChild(headerDiv)
  document.body.appendChild(contentDiv)
  document.body.appendChild(footerDiv)

  const homeButton = document.querySelector('.home')
  const menuButton = document.querySelector('.menu')
  const contactButton = document.querySelector('.contact')
  homeButton.addEventListener('pointerdown', getHomePage)
  menuButton.addEventListener('pointerdown', getMenuPage)
  contactButton.addEventListener('pointerdown', getContactPage)
  getHomePage()

  function getHomePage() {
    homeButton.classList.add('underline', 'underline-offset-4', 'text-[#d62300]')
    menuButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    contactButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    home()
  }

  function getMenuPage() {
    homeButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    menuButton.classList.add('underline', 'underline-offset-4', 'text-[#d62300]')
    contactButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    menu()
  }

  function getContactPage() {
    homeButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    menuButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    contactButton.classList.add('underline', 'underline-offset-4', 'text-[#d62300]')
    contact()
  }
}