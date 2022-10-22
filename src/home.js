export default function buildHomePage() {
  const content = document.querySelector('#content')
  content.textContent = ''

  const heading = document.createElement('div')
  const headingText = document.createElement('h1')
  headingText.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  headingText.textContent = 'Big Bad Burger'
  heading.appendChild(headingText);

  const reviewDiv = document.createElement('div')
  const review = document.createElement('p')
  const reviewer = document.createElement('p')
  reviewDiv.classList = 'my-[30px] mx-auto max-w-2xl'
  review.textContent = `The employees were very polite and friendly. My food was fresh and it came out quick. My burger had just the
    right amount of mayo. The sandwich was neat and wrapped to perfection. After I got my food I moved out of drive
    through. But I had to come back around because I forgot something. Drive through moved very fast and the young
    man at the window greeted me as if this was my first time. I will be visiting this store again. Thank you! ☺️
  `
  reviewer.classList = 'my-[20px] text-[#502314] text-xl font-semibold'
  reviewer.textContent = 'Minecque of Jacksonville, FL'
  reviewDiv.appendChild(review)
  reviewDiv.appendChild(reviewer)

  const timeDiv = document.createElement('div')
  const timeHeading = document.createElement('p')
  timeDiv.classList = 'my-[30px] mx-auto max-w-2xl'
  timeHeading.classList = 'my-[20px] text-[#502314] text-xl font-semibold'
  timeHeading.textContent = 'Hours'
  timeDiv.appendChild(timeHeading)
  let schedule = []
  for (let i = 0; i < 7; i++) {
    const day = document.createElement('p');
    day.classList = 'text-center'
    schedule.push(day)
  }
  schedule[0].textContent = 'Sunday: 6am - 8pm'
  schedule[1].textContent = 'Monday: 6am - 8pm'
  schedule[2].textContent = 'Tuesday: 6am - 8pm'
  schedule[3].textContent = 'Wednesday: 6am - 8pm'
  schedule[4].textContent = 'Thursday: 6am - 8pm'
  schedule[5].textContent = 'Friday: 6am - 8pm'
  schedule[6].textContent = 'Saturday: 6am - 8pm'
  schedule.forEach(element => timeDiv.appendChild(element))

  const addressDiv = document.createElement('div')
  const addressHeading = document.createElement('p')
  const address = document.createElement('p')
  addressDiv.classList = 'my-[30px] mx-auto max-w-2xl'
  addressHeading.classList = 'my-[20px] text-[#502314] text-xl font-semibold'
  addressHeading.textContent = 'Location'
  address.classList = 'text-center'
  address.textContent = '777 Saint Haven, Bart Fort, Morocco'
  addressDiv.appendChild(addressHeading)
  addressDiv.appendChild(address)

  content.appendChild(heading)
  content.appendChild(reviewDiv)
  content.appendChild(timeDiv)
  content.appendChild(addressDiv)
}