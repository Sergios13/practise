"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх переглянутих вами фільмів', ''),
              b = prompt('На скільки оцінете його?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }     
    }
}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто доволі мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви стандартний глядач');
    }else if (personalMovieDB.count >= 30) {
        console.log('Ви кіноман');
    }else {
        console.log('Виникла помилка');
    }
}

detectPersonalLevel();



function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();
