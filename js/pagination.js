const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let start = 0;
let end = 5;

buttonNext.addEventListener('click', () => {
    if (end === 20) {
        start = 0;
        end = start + 5;
    } else {
        start += 5;
        end += 5;
    }

    createMovieCard(start, end);
})

buttonPrev.addEventListener('click', () => {
    if (start === 0) {
        end = 20;
        start = end - 5;
    } else {
        start -= 5;
        end -= 5;
    }

    createMovieCard(start, end);
})