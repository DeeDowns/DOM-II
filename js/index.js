// Your code goes here

//1.mouseenter 
//2.mouseleave
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


//3. mousemove
const logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading)

logoHeading.addEventListener('mousemove', () => {
    logoHeading.style.backgroundColor = 'orange'
})


//4.dblclick
//5.click
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


//6.keydown
const hTwoHeadings = document.querySelectorAll('h2')
console.log(hTwoHeadings)

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
      hTwoHeadings.forEach(item => {
        item.style.fontSize = '50px';
      }) 
    }
})

//7.keyup
document.addEventListener('keyup', (e) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
      hTwoHeadings.forEach(item => {
        item.style.fontSize = '';
      }) 
    }
})


//8.scroll
const header = document.querySelector('.main-navigation')
console.log(header)

document.addEventListener('scroll', () => {
   header.style.backgroundColor = 'grey'
})

//9.drag
const destinationHTwo = document.querySelector('.content-destination h2');
const destinationImage = document.querySelector('.content-destination img');

destinationImage.addEventListener('drag', () => {
    destinationHTwo.textContent = 'whoa there'
})

//10.dragend
destinationImage.addEventListener('dragend', () => {
    destinationHTwo.textContent = 'Thats better, now pick a destination'
})


// Prevent event propogation of nested elements
const textContentP = document.querySelectorAll('.text-content p')
console.log('text p list', textContentP)
const textContentP3 = textContentP[2]
console.log('text p ', textContentP3)
const textContent = document.querySelectorAll('.text-content')
console.log('text box list',textContent)
const textContent2 = textContent[1]
console.log('text box', textContent2)

textContentP3.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'orange'
})

textContent2.addEventListener('mouseenter', (e) => {
    e.target.style.border = '3px solid blue';
    e.target.style.backgroundColor = 'green'
})

textContent2.addEventListener('mouseleave', (e) => {
    e.target.style.border = '';
    e.target.style.backgroundColor = ''
})

textContent2.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
})

textContentP3.addEventListener('click', (e) => {
    e.stopPropagation();
})





//Stop nav items from refreshing page
navLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    })
})




