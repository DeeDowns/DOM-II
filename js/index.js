// Your code goes here
const navLinks = document.querySelectorAll('.nav-link')
console.log(navLinks)

navLinks.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'orange';
    })
    item.addEventListener('mouseleave', () => {
        item.style.color = '';
    })
})

const logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading)

logoHeading.addEventListener('mousemove', () => {
    logoHeading.style.backgroundColor = 'orange'
})

const button = document.querySelectorAll('.btn');
console.log(button)

button.forEach(item => {
    item.addEventListener('dblclick', () => {
        item.style.backgroundColor = 'orange';
    })
    item.addEventListener('click', () => {
        item.style.backgroundColor = '';
    })
})

const hTwoHeadings = document.querySelectorAll('h2')
console.log(hTwoHeadings)

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
      hTwoHeadings.forEach(item => {
        item.style.fontSize = '50px';
      }) 
    }
})

document.addEventListener('keyup', (e) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
      hTwoHeadings.forEach(item => {
        item.style.fontSize = '';
      }) 
    }
})

const header = document.querySelector('.main-navigation')
console.log(header)

document.addEventListener('scroll', () => {
   header.style.backgroundColor = 'grey'
})

// const imgContent = document.querySelectorAll('.img-content')
// console.log(imgContent)