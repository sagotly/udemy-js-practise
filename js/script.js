'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false
}




personalMovieDB.movies[prompt('один из просмотреных фильмов?', '')] = prompt('насколько вы оцените его?', '');

personalMovieDB.movies[prompt('один из просмотреных фильмов?', '')] = prompt('насколько вы оцените его?', '');




console.log(personalMovieDB);