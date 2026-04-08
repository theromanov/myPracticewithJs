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
  toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
  writeYourGenres: () => {
    for (let i = 0; i < 1; i++) {
      //   const answer = prompt(`Your favorite genre number ${i + 1}`, "");

      //   if (answer == null || answer == "") {
      //     i--;
      //     alert("Try again!");
      //   } else {
      //     personalMovieDB.genres[i] = answer;
      //     alert("The data has been successfully added to our database!");
      //   }

      const answer = prompt(
        "Please name us your three favorite movie genres using coma",
        "",
      ).toLocaleLowerCase();

      if (answer == null || answer == "") {
        i--;
        alert("Try again!");
      } else {
        personalMovieDB.genres = answer.split(", ");
        alert("The data has been successfully added to our database!");
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} is ${item}`);
    });
  },
};
