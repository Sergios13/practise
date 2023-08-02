"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивилися?', '');
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивилися?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих вами фільмів', '').trim(),
                  b = prompt('На скільки оцінете його?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }     
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто доволі мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви стандартний глядач');
        }else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        }else {
            console.log('Виникла помилка');
        }
    },
    showMyD: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toglleVisibelMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2 ; i++) {
            let genrs = prompt('Вкажіть ваш улюблений жанр через кому').toLowerCase;
            if (genrs == null || genrs == '') {
            console.log('Ви ввели неправильні дані або не ввели їх взагалі');
            i--;
            } else {
                personalMovieDB.genres = genrs.split(', ')
                personalMovieDB.genres.sort();
            }
                
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} це - ${item}`);
        });
    }
};

