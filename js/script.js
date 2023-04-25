'use strict';


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},

	showMyDB: function () {
		if (personalMovieDB.privat) {
			console.log(personalMovieDB);
		}
	},

	WriteMyGenres: function () { 
		let result = 'gdfg';
		for ( let i = 1; i <= 3; i++){
			let genre = prompt(`какой ваш любимый жанр под номером ${i}`);
			while (genre == '' || genre == null) {
				genre = prompt(`какой ваш любимый жанр под номером ${i}`);
			}
			genre.trim();
			personalMovieDB.genres[i - 1] = genre;
		} 
		personalMovieDB.genres.forEach(function(key, i) {
			result += `любимый жанр под номером ${i} - это ${key}\n`;
		});
		console.log(result);
	},

	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},

	detectYourPersenalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},

	rememberMyFims: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
				b = prompt('На сколько оцените его?', '').trim();
		
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	}	

};

// personalMovieDB.start();
// personalMovieDB.detectYourPersenalLevel();
// personalMovieDB.rememberMyFims();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.WriteMyGenres();
