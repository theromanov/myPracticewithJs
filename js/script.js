"use strict";

const numberOfFilms = +prompt("How many movies have you watched already?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a, b;

for (let i = 0; i < 2; i++) {
  a = prompt("One of the last movies you watched?", "");
  b = +prompt("How would you rate it?", "");

  if (a != "" && b != "" && a != null && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Data successfully recorded!");
  } else {
    console.log("Error. Please try again!");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("You've watched quite few movies!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("You are a classic viewer!");
} else if (personalMovieDB.count > 30) {
  console.log("You are a movie fan!");
} else {
  console.log("An error occurred!");
}

console.log(personalMovieDB);
