// Common JS
document.querySelectorAll('.watch-control, .controls a').forEach((control) => {
    control.addEventListener('click', (e) => {
        e.preventDefault()
    })
})
// End of Common JS

// iPhone Box
let y = 20
let x = 0
let z = 0
let bool = true;
let interval;
const cube = document.querySelector('.cube')

const playPause = () => {

    if(bool){
    interval = setInterval(()=>{
        cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
    }, 50)
}else{
     clearInterval(interval)
}
}


const topButton = document.querySelector('.top-x-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

const bottomButton = document.querySelector('.bottom-x-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
const leftButton = document.querySelector('.left-y-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
})
const rightButton = document.querySelector('.right-y-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
})
const rightDiagButton = document.querySelector('.top-z-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})
const leftDiagButton = document.querySelector('.bottom-z-control').addEventListener('click',()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})


playPause()

document.querySelector('.controls').addEventListener('mouseover', ()=>{
    bool = false
    playPause()
})
document.querySelector('.controls').addEventListener('mouseout', ()=>{
    bool = true
    playPause()
})

// End of iPhone Box





// Slideshow 
const slideshowDivs = () =>{
    for(let i = 1; i<= 5; i++){
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg`

        // When i equals add the class of 'change' to the div
        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}
slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(()=>{
        a++

        const div = document.querySelector('.slideshow .change')


        div.classList.remove('change')

        if(a < divs.length){
            div.nextElementSibling.classList.add('change')
        }else{
            divs[0].classList.add('change')
            a = 1
        }
        
    }, 20000)
}


slideshow()
// End of Slideshow


// Section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight/2){ 
        // returns the pixels the current document has been scrolled from the top edge of the window (length of the part of the webpage that was scrolled up)
        // console.log('Scrolled')
        section3Content.classList.add('change')
    }
})


// End of Section 3
// Section 4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')
const watchTop = document.querySelector('.watch-top-control')
const watchRight = document.querySelector('.watch-right-control')
const watchBottom = document.querySelector('.watch-bottom-control')
const watchLeft = document.querySelector('.watch-left-control')


let axisY = 0
let axisX = 0
// increase/decrease by 70rem

const hideControl = () => {
    if(axisY === -280){
        watchTop.classList.add('hideControl')
    } else{
        watchTop.classList.remove('hideControl')
    }
    if(axisY === 280){
        watchBottom.classList.add('hideControl')
    } else{
        watchBottom.classList.remove('hideControl')
    }
    if(axisX === 280){
        watchRight.classList.add('hideControl')
    } else{
        watchRight.classList.remove('hideControl')
    }
    if(axisX === -280){
        watchLeft.classList.add('hideControl')
    } else{
        watchLeft.classList.remove('hideControl')
    }
}
watchTop.addEventListener('click', () => {
    // decrease margin top by 70rem
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})
watchBottom.addEventListener('click', () => {
    // increase margin top by 70rem
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControl()
})
watchRight.addEventListener('click', () => {
    // decrease margin top by 70rem
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControl()
})
watchLeft.addEventListener('click', () => {
    // decrease margin top by 70rem
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
})



// End of Section 4
