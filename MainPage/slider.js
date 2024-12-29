const slider = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20;

function updateButtons() {
    if (currentIndex === 0) {
        prevBtn.classList.add('disabled');
        prevBtn.disabled = true;
    } else {
        prevBtn.classList.remove('disabled');
        prevBtn.disabled = false;
    }

    if (currentIndex === cards.length - 1) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
    } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
    }
}

function slide(direction) {
    if (direction === 'next' && currentIndex < cards.length - 1) {
        currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    }

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    updateButtons();
}

prevBtn.addEventListener('click', () => slide('prev'));
nextBtn.addEventListener('click', () => slide('next'));

updateButtons();
