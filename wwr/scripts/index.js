const slideshow = document.getElementById('slideshow')
const slides = document.querySelectorAll('img.slide')

const captions = document.querySelectorAll('p.slide')
let currentSlide = 0;


setInterval(nextSlide, 4000)

function nextSlide(){
    showSlide(currentSlide+1)
}

function showSlide(slideN){
    slides[currentSlide].className = 'slide oldSlide'
    
    if(captions.length){
        captions[currentSlide].className = 'slide oldSlide slideP '

    }
    
    currentSlide = (slideN+slides.length)%slides.length
    slides[currentSlide].className = 'slide newSlide'
    
    if(captions.length){
        captions[currentSlide].className = 'slide newSlide slideP' 

    }

}
