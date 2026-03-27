"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Один з останніх переглянутих фільмів?", ""),
    b = +prompt("На скільки оціните його?", "");

  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
