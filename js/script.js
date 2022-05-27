"use strict";

// const result = confirm("Are you here?");
// console.log(result);
 
// const answer = prompt('czy masz 18', '18');
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('jak masz na imie?', '');
// answers[1] = prompt('skąd jesteś?', '');
// answers[2] = prompt('ile masz lat?', '');

// document.write(answers);

// const category = 'toys';
// console.log(`https//someurl.com/${category}/5`);


// const user = 'sergo';

// alert(`elo, ${user}`);

const numberOfFilms = +prompt('ile filmów obejałeś?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : Boolean(false)

};

const a = prompt('ostatnio obejany film?', ''),
      b = prompt('jak g oceniasz?', ''),
      c = prompt('ostatnio obejany film?', ''),
      d = prompt('jak g oceniasz?', '');

      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


