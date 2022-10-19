const moviesContainer = document.querySelector('.movies');

let movies = [];
let moviesSearch = [];
let geralHL = {};
let videoHL = [];

const getMovies = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
    const body = await response.json()
    movies = body.results;
    moviesSearch = movies;
}

const getHighlightMovie = async () => {
    const geralResponse = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');
    const geralBody = await geralResponse.json();
    geralHL = geralBody

    const videoResponse = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');
    const videoBody = await videoResponse.json();
    videoHL = videoBody.results;
}

const createMovieCard = (start, end) => {
    const tempMovies = moviesSearch.slice(start, end);
    moviesContainer.innerHTML = ''
    tempMovies.forEach(item => {
        const cardMovie = document.createElement('div');
        cardMovie.classList.add('movie');
        cardMovie.style.backgroundImage = `url(${item.poster_path})`;

        const infoMovie = document.createElement('div');
        infoMovie.classList.add('movie__info');

        const titleMovie = document.createElement('span');
        titleMovie.classList.add('movie__title');
        titleMovie.textContent = item.title;

        const img = document.createElement('img');
        img.src = "https://raw.githubusercontent.com/carlpess/cubos-flix-app/master/assets/estrela.svg";
        img.alt = "Estrela";

        const ratingMovie = document.createElement('span');
        ratingMovie.classList.add('movie__rating');
        ratingMovie.textContent += item.vote_average;

        ratingMovie.append(img);
        infoMovie.append(titleMovie);
        infoMovie.append(ratingMovie);
        cardMovie.append(infoMovie);

        moviesContainer.append(cardMovie);

        cardMovie.addEventListener('click', () => {
            modal.classList.remove('hidden')
            modalGenres.innerHTML = ''
            createModal(item.id);
        })
    })
}

const createHighlightMovie = () => {
    const highlightVideo = document.querySelector('.highlight__video');
    highlightVideo.style.backgroundImage = `url(${geralHL.backdrop_path})`;

    const highlightTitle = document.querySelector('.highlight__title');
    highlightTitle.textContent = geralHL.title;

    const highlightRating = document.querySelector('.highlight__rating');
    highlightRating.textContent = (geralHL.vote_average).toFixed(1);

    const highlightGenres = document.querySelector('.highlight__genres');
    const genresNames = []
    geralHL.genres.forEach(genre => {
        genresNames.push(genre.name);
    })
    highlightGenres.textContent = genresNames.join(', ');

    const highlightLaunch = document.querySelector('.highlight__launch');
    const releaseDate = geralHL.release_date.split('-');
    highlightLaunch.textContent = `${releaseDate[2]} do ${releaseDate[1]} de ${releaseDate[0]}`;

    const highlightDescription = document.querySelector('.highlight__description');
    highlightDescription.textContent = geralHL.overview;

    const highlightVideoLink = document.querySelector('.highlight__video-link');
    highlightVideoLink.href = `https://www.youtube.com/watch?v=${videoHL[1].key}`
}

const init = async () => {
    await getMovies();
    await getHighlightMovie()
    createMovieCard(0, 5);
    createHighlightMovie();
}

init()
