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
    ['movie1',0,0],
    ['movie2',0,0]
];
/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    console.log(`\tWelcome to the Hollywood Movie Rating Guide.`);
    while (continueResponse === 1) {
        menu();
        setContinueResponse();
    }
}

main();
function menu(){
    console.log('\nwhat would you like to do?');
    console.log('\nPress 1 to see a list of movies.');
    console.log('\nPress 2 to review a movie.');
    console.log('\nPress 3 to select a movie to see its rating.');
    let x =Number(PROMPT.question('\nPress 4 see a list of movies by rating. '));
    // console.log(movieList);
    if(x===1){
        for (let i = 0;i<movieList.length;i++){
            console.log(movieList[0]);
        }
    }
    else if(x===2){
        reviewMovie();
    }
}
/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to review again? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}
function reviewMovie() {
    movieTitle= PROMPT.question(`\nWhat movie would you like to review?`);
    let i;
    for (i = 0;i<movieList.length;i++){
        if (movieTitle===movieList[i][0])break;
    }
    if (i===movieList.length){// they did not enter a correct movie
        console.log(movieTitle+" is not a listed movie. See list.")
    }
    else {//moving on to the review
        let x = Number(PROMPT.question(`\nWhat score would you give `+movieTitle+`? 1-5`));
        while (x<=1||x>=5){
            x = Number(PROMPT.question(`\nWhat score would you give `+movieTitle+`? 1-5`));
        }
        movieList[i][1]=movieList[i][1]+x;
        movieList[i][2]++;
    }
}
/**
 * @method
 * @desc reviewScore Mutator
 * @returns {null}
 */

}

/**
 * @method
 * @desc calculate average
 * @returns {null}
 */
function calculateAve(movie) {
    let totalStars=movieList;
    console.log(`\nAverage stars is ` +totalStars);

}
