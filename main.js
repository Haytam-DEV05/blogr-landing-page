// M0BILE MENU =>

const bareMenu = document.querySelector("#header nav .bare-menu") ;
const hamburger = document.querySelector("#header nav .bare-menu .hamburger") ;
const close = document.querySelector("#header nav .bare-menu .close")
const ulNav = document.querySelector("#header nav .ul-nav")
const buttons = document.querySelector("#header nav .buttons")

bareMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  close.classList.toggle("active")
  ulNav.classList.toggle("active")
  buttons.classList.toggle("active")
})


// const row = document.querySelector('#section-bar .container .row')

const phone = document.querySelector(
  '#section-bar .container .row .col:first-child'
)
const content = document.querySelector(
  '#section-bar .container .row .col:last-child'
)
const options = {}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entrie => {
      if (entrie.isIntersecting) {
        entrie.target.classList.add('show')
      } else {
        entrie.target.classList.remove('show')
      }
    })
  },
  {
    threshold: 0.4,
    rootMargin: '0px 0px 50px 0px'
  }
)

observer.observe(phone)
observer.observe(content)
