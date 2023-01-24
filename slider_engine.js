"use strict";

const slider = document.querySelector('#slider'),
      sliderItems = Array.from(slider.children),
      btnNext = document.querySelector('#btnNext'),
      btnPrev = document.querySelector('#btnPrev');
      
sliderItems.forEach( (slide, index) => {
    
    if (index !== 0) slide.classList.add('hidden');    

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', () => showNextSlide('forward'));  


});

btnNext.onclick = () => showNextSlide('forward');

btnPrev.onclick = () => showNextSlide('back');

function showNextSlide (direction) {

    // скрытие текущего слайда
    const nowSlide = slider.querySelector('[data-active]'),
          nowSlideIndex = +nowSlide.dataset.index;
          
    nowSlide.classList.add('hidden');
    nowSlide.removeAttribute('data-active');

    // движение слайдера ( назада или вперед ) и в зависимости от этого, расчет индекса
    let nextSlideIndex;
    if (direction ==='forward') {
        nextSlideIndex = nowSlideIndex + 1 === sliderItems.length ? 0 : nowSlideIndex + 1;
    } else if (direction === 'back') {
        nextSlideIndex = nowSlideIndex === 0 ? sliderItems.length - 1 : nowSlideIndex - 1;
    }

    // показ следующего слайда
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

}