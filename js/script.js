"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        'barbie': '9'
    },
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих вами фільмів', ''),
      b = prompt('На скільки оцінете його?', ''),
      c = prompt('Один з останніх переглянутих вами фільмів', ''),
      d = prompt('На скільки оцінете його?', ''); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)