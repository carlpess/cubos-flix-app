const modal = document.querySelector('.modal');
const modalGenres = document.querySelector('.modal__genres')

const createModal = async (idMovie) => {
    const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${idMovie}?language=pt-BR`);
    const body = await response.json();

    const modalTitle = document.querySelector('.modal__title');
    modalTitle.textContent = body.title;

    const modalImage = document.querySelector('.modal__img');
    modalImage.src = body.backdrop_path;

    const modalDescription = document.querySelector('.modal__description');
    modalDescription.textContent = body.overview;

    const modalAverage = document.querySelector('.modal__average');
    modalAverage.textContent = (body.vote_average).toFixed(2);


    body.genres.forEach(genre => {
        const modalGenre = document.createElement('div');
        modalGenre.classList.add('modal__genre');
        modalGenre.textContent = genre.name;

        modalGenres.append(modalGenre);
    })
}

modal.addEventListener('click', () => {
    //não adicionei um evento especifico pra fechar pelo botão por causa da propagação de eventos, não achei necessário.
    modal.classList.add('hidden')
})