const row = document.querySelector('#section-bar .container .row')

const options = {}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entrie => {
      if (entrie.isIntersecting) {
        entrie.target.classList.add('show')
      }
    })
  },
  {
    threshold: 0.4,
    rootMargin: '0px 0px 50px 0px'
  }
)

observer.observe(row)
