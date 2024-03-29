/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
// let sum = 10 + 20;
// console.log("es.A:", sum);

// /* ESERCIZIO B
//   Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
// */
// let random = Math.floor(Math.random() * 20);
// console.log("es.B:", random);

// /* ESERCIZIO C
//   Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
// */
// let me = {
//   name: "Francesco",
//   surname: "Di Clemente",
//   age: 30,
// };
// console.log("es.C:", me);
// /* ESERCIZIO D
//   Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
// */
// delete me.age;
// console.log("es.D: rimuovi age", me);

// /* ESERCIZIO E
//   Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
// */
// me.skills = ["Html", "Css", "Javascript"];
// console.log("es.E: aggiungo skills", me);

// /* ESERCIZIO F
//   Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
// */
// me.skills.push("Java");
// console.log("es.F: aggiungo una skill", me);

// /* ESERCIZIO G
//   Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
// */
// me.skills.pop();
// console.log("es.G: rimuovo ultima skill", me);

// // Funzioni

// /* ESERCIZIO 1
//   Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
// */
// const dice = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };
// console.log("Es.1: Dice", dice());
// /* ESERCIZIO 2
//   Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
// */
// const whoIsBigger = function (a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// };
// console.log("Es.2: whoIsBigger", 5, 8, "=>", whoIsBigger(5, 8));

// /* ESERCIZIO 3
//   Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

//   Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
// */
// const splitMe = function (stringa) {
//   return stringa.split(" ");
// };
// console.log("Es.3: splitMe", splitMe("Javascript is not like java"));

// /* ESERCIZIO 4
//   Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
//   Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
// */
// const deleteOne = function (stringa, head) {
//   if (head) {
//     return stringa.slice(1);
//   }
//   return stringa.slice(0, stringa.length - 1);
// };
// console.log("Es.4: deleteOne:", deleteOne("Javascript is not like java", true));

// /* ESERCIZIO 5
//   Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

//   Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
// */
// const onlyLetters = function (stringa) {
//   let array = stringa.split("");
//   for (let i = 0; i < array.length; i++) {
//     // se carattere compreso tra [0-9]
//     if (array[i] >= "0" && array[i] <= "9") {
//       array.splice(i, 1);
//       i--; // dopo aver rimosso elemento la lunghezza sarà ridotta di uno e l'elem successivo ha ancora indice i
//     }
//   }
//   return array.join("");
// };
// console.log(
//   "Es.5: onlyLetters:",
//   onlyLetters("Javascript22 is not44 LIke java")
// );

// /* ESERCIZIO 6
//   Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
// */

// const isThisAnEmail = function (mail) {
//   return mail.includes("@") && (mail.includes(".it") || mail.includes(".com"));
// };
// console.log("Es.6: isThisAnEmail: ", isThisAnEmail("rabarabro@mail.com"));

// /* ESERCIZIO 7
//   Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
// */

// const whatDayIsIt = function () {
//   const days = [
//     "Domenica",
//     "Lunedì",
//     "Martedì",
//     "Mercoledì",
//     "Giovedì",
//     "Venerdì",
//     "Sabato",
//   ];
//   const today = new Date();
//   return days[today.getDay()];
// };

// console.log("Es.7: whatDayIsIt:", whatDayIsIt());

// /* ESERCIZIO 8
//   Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
//   Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
//   il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
//   L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

//   Example:
//   rollTheDices(3) => ritorna {
//       sum: 10
//       values: [3, 3, 4]
//   }
// */
// const rollTheDices = function (num) {
//   let dices = {};
//   dices.sum = 0;
//   dices.values = [];

//   for (let i = 0; i < num; i++) {
//     let value = dice();
//     dices.values.push(value);
//     dices.sum += value;
//   }
//   dices.sum;
//   return dices;
// };
// const rollTheDicesReduce = function (num) {};
// console.log("Es.9: rollTheDices:", rollTheDices(4));

// /* ESERCIZIO 9
//   Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
// */

// const howManyDays = function (date) {
//   const oggi = new Date();
//   const diff = oggi.getTime() - date.getTime();
//   return Math.floor(diff / 1000 / 60 / 60 / 24);
// };
// console.log("Es.8: howManyDays:", howManyDays(new Date(2021, 9 - 1, 10)));

// /* ESERCIZIO 10
//   Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
// */
// const isTodayMyBirthday = function () {
//   const oggi = new Date();
//   const birthday = new Date(1992, 10 - 1, 13);
//   if (
//     oggi.getDate() === birthday.getDate() &&
//     oggi.getMonth() === birthday.getMonth()
//   ) {
//     return true;
//   }
//   return false;
// };
// console.log("Es.10: isTodayMyBirthday:", isTodayMyBirthday());

// // Arrays & Oggetti
// // NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

// /* ESERCIZIO 11
//   Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
//   in esso la proprietà chiamata come la stringa passata come secondo parametro.
// */
// const deleteProp = function (obj, property) {
//   delete obj[property];
//   return obj;
// };
// const person = {
//   name: "Robert",
//   surname: "Stuart",
//   age: 22,
// };

// console.log("Es.11: deleteProp", deleteProp(person, "age"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
// const newestMovie = function (movies) {
//   let max = movies[0].Year;
//   let index = 0;
//   movies.forEach((movie, i) => {
//     if (movie.Year > max) {
//       max = movie.Year;
//       index = i;
//     }
//   });
//   return movies[index];
// };
// console.log("Es.12: newestMovie", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
// const countMovies = function (movies) {
//   let num = 0;
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].Type === "movie") {
//       num++;
//     }
//   }
//   return num;
// };
// console.log("Es.13: countMovies", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
// const onlyTheYears = function (movies) {
//   return movies.map((movie) => parseInt(movie.Year));
// };
// console.log("Es.14: onlyTheYears", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
// const onlyInLastMillennium = function (movies) {
//   return movies.filter((movie) => parseInt(movie.Year) > 2000);
// };
// console.log("Es.15: onlyInLastMillennium", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
// const sumAllTheYears = function (movies) {
//   return movies
//     .map((movie) => parseInt(movie.Year))
//     .reduce((acc, curr) => curr + acc);
// };
// console.log("Es.16: sumAllTheYears", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
// const searchByTitle = function (title) {
//   return movies.filter((movie) => {
//     let movieTitle = movie.Title.toLowerCase();
//     return movieTitle.includes(title.toLowerCase());
//   });
// };
// console.log("Es.16: searchByTitle", searchByTitle("avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
// const searchAndDivide = function (title) {
//   let match = searchByTitle(title);
//   let unmatch = movies.filter((movie) => {
//     let movieTitle = movie.Title.toLowerCase();
//     return !movieTitle.includes(title.toLowerCase());
//   });
//   return { match, unmatch };
// };
// console.log("Es.16: searchAndDivide", searchAndDivide("avengers"));
/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
// const removeIndex = function (index) {
//   movies.splice(index, 1);
//   return movies;
// };
// console.log("Es.19: removeIndex", removeIndex(1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
// document.querySelector("#container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
// document.querySelector("div");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
// const printTable = function () {
//   let tableData = document.querySelectorAll("td");
//   tableData.forEach((td) => {
//     console.log(td.innerText);
//   });
// };
// console.log("Es.22: printTable", printTable());

// /* ESERCIZIO 23
//   Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */
// const backgroundLinksRed = function () {
//   const links = document.querySelectorAll("a");
//   links.forEach((link) => {
//     link.style = "background-color: red;";
//   });
// };
// console.log("Es.22: backgroundLinksRed", backgroundLinksRed());

// /* ESERCIZIO 24
//   Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */
// const addListElementById = function (id, elementText) {
//   const htmlList = document.querySelector("#" + id);
//   const li = document.createElement("li");
//   li.textContent = elementText;
//   htmlList.appendChild(li);
// };
// console.log(
//   "Es.23: addListElementById",
//   addListElementById("myList", "parmigiano")
// );

// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */
// const emptyListById = function (id) {
//   const htmlListItems = document.querySelector("#" + id).querySelectorAll("li");
//   htmlListItems.forEach((li) => li.remove());
// };

// /* ESERCIZIO 26
//   Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
// */
// const addClassTest = function () {
//   const tableRows = document.querySelectorAll("tr");
//   tableRows.forEach((tr) => tr.classList.add("test"));
// };

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function (n) {
  let row = [];
  for (let i = 0; i < n; i++) {
    // array [*];
    // array[*,*]
    // array[*,*,*]
    row.push("*");
    console.log(...row);
  }
};
// halfTree(10);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (n) {
  let rowArray = [];
  // array[' ', ' ', '*'];
  // array[' ',  *,  *]
  // array[*,*,*]
  // num degli asterischi = numero riga * 2 +1
  for (let row = 0; row < n; row++) {
    for (let spaces = n - row - 1; spaces > 0; spaces--) {
      rowArray.push(" ");
    }
    for (let i = 0; i <= row * 2; i++) {
      rowArray.push("*");
    }
    console.log(...rowArray);
    rowArray = []; //svuoto array
  }
};

tree(10);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (n) {
  // divido per tutti i num da 2 a rad(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log("Es.29: isItPrime", isItPrime(11));
