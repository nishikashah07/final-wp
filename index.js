let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselSlide = document.querySelector('.carousel-slide');
    
    carouselSlide.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}


let autoSlideInterval = setInterval(nextSlide, 4000);


document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});


document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextSlide, 4000);
});

