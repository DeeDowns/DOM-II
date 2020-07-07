// const blocks = document.querySelectorAll('.blocks');
// console.log(blocks)


// blocks.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.style.order = '-1'
//     })
// })
const blueBlock =  document.querySelector('.block--blue');
console.log(blueBlock)

blueBlock.addEventListener('click', (e) => {
    e.target.style.order = '-1'
   
})

blueBlock.addEventListener('mousedown', () => {
    gsap.to('.block--blue', {duration: 2, x: 300})
})

blueBlock.addEventListener('mouseup', () => {
    gsap.to('block--blue', {duration: 2, x: 0})
})


