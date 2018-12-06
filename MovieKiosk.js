/**
 *   @author Daniel King
 *   @version 0.0.1
 *   @summary Project 4 || created: 12.2.2018
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse=1;
let movieTitle;
let movieList = [
    ['movie1',3,1],
    ['movie2',4,1]
];
/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    console.log(`\tWelcome to the Review Kiosk.`);
    while (continueResponse === 1) {
        menu();
        setContinueResponse();
    }
}

main();
function menu(){
    console.log('\nwhat would you like to do? ');
    console.log('\nPress 1 to see a list of movie titles. ');
    console.log('\nPress 2 to review a movie on the list. ');
    console.log('\nPress 3 to review an unlisted movie. ');
    console.log('\nPress 4 to select a movie to see its rating. ');
    let x =Number(PROMPT.question('\nPress 5 see a list of movies and their ratings. '));
    // console.log(movieList);
    if(x===1){
        for (let i = 0;i<movieList.length;i++){
            console.log(movieList[i][0]);
        }
    }
    else if(x===2){
        reviewMovie();
    }
    else if(x===3){
        addMovie();
    }
    else if(x===4){
        showRating();
    }
    else{
        sortAndPrint();
    }
}
/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}
function reviewMovie() {
    movieTitle= PROMPT.question(`\nWhat movie would you like to review? `);
    let i;
    for (i = 0;i<movieList.length;i++){
        if (movieTitle===movieList[i][0])break;
    }
    if (i===movieList.length){// they did not enter a correct movie
        console.log(movieTitle+" is not a listed movie. See list.")
    }
    else {//moving on to the review
        let x = Number(PROMPT.question(`\nWhat score would you give `+movieTitle+`? 1-5 `));
        while (x<=1||x>=5){
            x = Number(PROMPT.question(`\nWhat score would you give `+movieTitle+`? 1-5 `));
        }
        movieList[i][1]=movieList[i][1]+x;
        movieList[i][2]++;
    }
}
/**
 * @method
 * @desc prints the average rating for a given movie
 * @returns {null}
 */
function showRating() {
    movieTitle= PROMPT.question(`\nWhat movie's score would you like to view? `);
    let i;
    for (i = 0;i<movieList.length;i++){
        if (movieTitle===movieList[i][0])break;
    }
    if (i===movieList.length){// they did not enter a correct movie
        console.log(movieTitle+" is not a listed movie. See list. ")
    }
    else {
        console.log("The rating for the movie " + movieList[i][0] + " is: ");
        if (movieList[i][2] === 0) {
            console.log("0, and hasn't been reviewed ");
        }
        else {
            console.log(movieList[i][1] / movieList[i][2] + " and has been reviewed " + movieList[i][2] + " times. ");
        }
    }
}

/**
 * @method
 * @desc sorts the array and prints everything
 * @returns {null}
 */
function sortAndPrint() {
    let swapCheck = 1;
    let temp;
    while (swapCheck) {
        swapCheck = 0;
        for (let i = movieList.length-1; i >0; i--) {
            console.log(i);
            if (movieList[i - 1][1]/movieList[i - 1][2] < movieList[i][1]/movieList[i][2]) {
                temp = movieList[i];
                movieList[i] = movieList[i - 1];
                movieList[i - 1] = temp;
                swapCheck = 1;
            }
        }
    }
    for (let i = 0; i < movieList.length; i++) {
        console.log("title: "+movieList[i][0]+" Average Score: "+movieList[i][1]/movieList[i][2]+" Reviewed: "+movieList[i][2]+" times.")
    }
}

function addMovie(){
    movieTitle= PROMPT.question(`\nWhat movie would you like to add? `);
    let i;
    for (i = 0;i<movieList.length;i++){
        if (movieTitle===movieList[i][0])break;
    }
    if (i!==movieList.length){// they entered a movie on the list.
        console.log(movieTitle+" is already a listed movie. See list. ");

    }
    else{
        movieList.push([]);
        movieList[i][0]=movieTitle;
        let x = Number(PROMPT.question(`\nWhat score would you give `+movieTitle+`? 1-5 `));
        while (x<=1||x>=5){
            x = Number(PROMPT.question(`\nWhat score would you give `+movieTitle+`? 1-5 `));
        }
        movieList[i][1]=x;
        movieList[i][2]=1;
    }
}
