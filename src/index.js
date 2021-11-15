import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import Person from "./Person.js";
import Section from "./Section";
// import Kawaii from "./Kawaii";
// import ApiX from "./ApiX.js";
// import { Planet } from 'react-kawaii';


// https://api.fungenerators.com/fact/random
// https://picsum.photos/200



// /* Destructuring */

// // object

// const instructor = {
//   name: "Dalton",
//   awake: true,
//   props: {
//     shirt: "blue tank top",
//     computer: {
//       type: "windows",
//     },
//   },
//   sayHello() {
//     console.log("Hello!");
//   },
//   // using destructuring inside a method
//   logProps() {
//     const { shirt, computer } = this.props;
//     const { name } = this;

//     console.log(shirt);
//     console.log(computer);
//     console.log(name);
//   },
// };
// // assignment via dot notation

// // const name = instructor.name;
// // const shirt = instructor.props.shirt;

// // destructuring assignment
// // you can only pull out based on keys that are already existing
// // you CAN NOT rename them
// const { name, awake } = instructor;
// const fullName = instructor.name;

// // how to destructure nested data
// // const {
// //   computer,
// //   computer: { type },
// //   shirt,
// // } = instructor.props;

// const {
//   props: {
//     computer: { type },
//   },
// } = instructor;

// // Array

// const pets = ["Scarlet", "Elenore"];

// const [dog, cat] = pets;

// // where is it useful?

// function returnInstructors() {
//   return ["Dalton", "April"];
// }

// const [leadInstructor, instructorAssociate] = returnInstructors();

// const state = {};

// const useState = defaultValue => {
//   let stateIndex = 0;
//   if (Object.keys(state).length === 0) {
//     state[stateIndex] = defaultValue;
//   } else {
//     stateIndex = Object.keys(state).length;
//     state[stateIndex] = defaultValue;
//   }

//   const updateState = value => {
//     state[stateIndex] = value;
//   };

//   return [state[stateIndex], updateState];
// };

// // const [person, setPerson] = useState("Dalton");

// // setPerson("Adonis");

// // function parameters
// /* 
// function logName(personObj) {
//   console.log(personObj.name, personObj.awake);
// } */

// function logName({ name, awake = false }) {
//   console.log(name, awake);
// }

// // logName({ name: "Adonis" });
// // logName(instructor);

// /* ... */

// // Spread operator
// // when we combine arrays and objects

// // Arrays

// const arr = [1, 2, 3];
// // const arrTwo = arr.concat([4, 5, 6]);
// const arrTwo = [0, ...arr, 4, 5, 6];

// const bigArr = [...arr, ...arrTwo, "whoa"];

// // Objects
// const additionalProps = {
//   shirt: "blue tank top",
//   awake: false,
// };

// const person = {
//   ...additionalProps,
//   name: "Dalton",
//   awake: true,
// };

// // rest operator
// // when we combine unlimited functional parameters

// function restArgs(data, ...args) {
//   console.log(args);
// }

// // restArgs("data", "cat", "dog", "bird", "thing", "other thing");

// // real world example

// const app = {
//   get(route, ...args) {
//     const req = {};
//     const res = {};

//     console.log("Running GET request");
//     console.log(args);

//     const next = args[1];
//     args[0](req, res, next);
//   },
// };

// const middleware = (req, res, next) => {
//   console.log("Middleware");
//   next(req, res);
// };

// // app.get("/", middleware, function (req, res, next) {
// //   console.log(req, res, "View Function");
// // });

// /* Array Method  */

// // map
// // return a new array based on a callback that we provide

// const caffineItems = ["Yerba Mate", "Coffee", "Earl Gray Tea"];

// const caffineObjects = caffineItems.map(function (item, index) {
//   return { name: item, caffineLevel: index };
// });

// const caffineObjectsArrow = caffineItems.map((item, index) => ({
//   name: item,
//   caffineLevel: index,
// }));

// // filter
// // return a new array based on a conditonal in the callback function
// // you MUST return true or false

// const nums = [1, 2, 3, 1, 1, 2, 3, 1];

// const removedOnes = nums.filter(function (value, index) {
//   if (value !== 1) return true;
// });

// // includes
// // based on a value that you give the method it will return true or false

// const hasFive = nums.includes(5);

// // combining filter and includes

// const names = ["adonis", "dalton", "april"];

// const search = (array, target) =>
//   array.filter(str => str.toLowerCase().includes(target.toLowerCase()));

// // console.log(search(names, "d"));

/* Fetch!! */

fetch("https://picsum.photos/200")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log({ photo: json });
        console.log("first fetch works")
        // json.data.forEach(function(photo){
        //   console.log(photo);
        // });
    });

// configuration

fetch("https://picsum.photos/200", { method: "GET" })
    .then(response => response.json())
    .then(json => console.log({ photo: json }));

// Api keys

// query params in url

const url = "url/?size";

const photoURl =
    "https://picsum.photos/200";

fetch(photoURl)
    .then(response => response.json())
    .then(json => console.log({ photo: json }));

// headers of a request
// r6

// const r6Url = "https://r6-api.herokuapp.com/api/v1/operators";

// fetch(r6Url, {
//   method: "GET",
//   headers: {
//     api_key: "8eae1285-2647-4dc6-88dd-acbffdd694ce",
//   },
// })
//   .then(response => response.json())
//   .then(json => console.log({ r6: json }));

/* 
    Activity 

    - With your team pick out an api
    - Using fetch request data from the api
    - Share your team's fetch request
  */

// cocktail api
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
//   .then(response => response.json())
//   .then(json => console.log({ cocktail: json }));

// // LOTR
// const lotrUrl = "https://the-one-api.dev/v2/character";

// fetch(lotrUrl, {
//   method: "GET",
//   headers: {
//     Authorization: "Bearer TVwUPPZO0j5OsffRNuA3",
//   },
// })
//   .then(response => response.json())
//   .then(json => console.log({ lotr: json }));

// yoda

// const yodaUrl =
//     "https://api.funtranslations.com/translate/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet";

// const yodaUrl2 =
//     "https://api.funtranslations.com/translate/yoda.json?text=Master%20Luke%20has%20more%20training%20to%20do";

// const yodaUrl3 =
//     "https://api.funtranslations.com/translate/yoda.json?text=Hello%20World%20that%20is%20so%20fetch";

// fetch(yodaUrl3)
//     .then(response => response.json())
//     .then(json => console.log({ yoda: json }));

// cocktail 2
// const cocktailUrl =
//   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
// fetch(cocktailUrl)
//   .then(response => response.json())
//   .then(json => console.log({ cocktailTwo: json }));

// // lotr 2

// fetch("https://the-one-api.dev/v2/book", {
//   method: "GET",
//   headers: {
//     Authorization: "PDDQ8-0_XkrbLh-mtMZe",
//   },
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log({ lotrTwo: data });
//   });

const rootElement = document.getElementById("root");
ReactDOM.render(rootElement);