const input = document.querySelector('.input');

input.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        if (input.value !== '') {
            moviesSearch = [];
            movies.forEach(movie => {
                if (movie.title.toLowerCase().includes(input.value.toLowerCase())) {
                    moviesSearch.push(movie);
                }
            });

            createMovieCard(0, 5);
        } else {
            init()
        }
    }

})