"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих вами фільмів', ''),
          b = prompt('На скільки оцінете його?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }     
personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви стандартний глядач');
}else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
}else {
    console.log('Виникла помилка');
}

console.log(personalMovieDB);