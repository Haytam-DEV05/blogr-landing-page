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
