"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies have you watched already?", "");

  while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies have you watched already?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("One of the last movies you watched?", ""),
      b = +prompt("How would you rate it?", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Data successfully recorded!");
    } else {
      console.log("Error. Please try again!");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("You've watched quite few movies!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("You are a classic viewer!");
  } else if (personalMovieDB.count > 30) {
    console.log("You are a movie fan!");
  } else {
    console.log("An error occurred!");
  }
}

detectPersonalLevel();

function showMyDB(show) {
  if (!show) {
    console.log(personalMovieDB);
  }
}

showMyDB();
