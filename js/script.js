"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = prompt(
      "How many movies have you watched already?",
      "",
    );

    while (
      personalMovieDB.count == null ||
      personalMovieDB.count == "" ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt(
        "How many movies have you watched already?",
        "",
      );
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("You've watched quite few movies!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("You are a classic viewer!");
    } else if (personalMovieDB.count > 30) {
      console.log("You are a movie fan!");
    } else {
      console.log("An error occurred!");
    }
  },
  showMyDB: (show) => {
    if (!show) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      const answer = prompt(`Ваш улюблений жанр під номером ${i + 1}`, "");
      personalMovieDB.genres[i] = answer;
    }
  },
};
