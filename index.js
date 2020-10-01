
/**
 *   @author Danforth, Kwinn (kdanforth@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Program that allows two people to play pig2 || created: 09.27.2020
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

// ----Above this line is section 1, comment header block & pragmas/library calls----

let p1, p2, p1score=0, p2score=0, winner, roll, turn, rolld1, rolld2;
const  MAX_SCORE = 500;

// ----Above this line is section 2, global variable declarations & global constant declarations/assignments----

function main() {
    getPlayerInfo();
    do {
        rollDice();
        scoreTurn();
        rollAgain();
    } while (p1score < MAX_SCORE && p2score < MAX_SCORE); /* should be 500!!! */
    scoreGame();
    printWinner();
}

main();

// ----Above this line is section 3, dispatch method & call to dispatch method----

function getPlayerInfo(){
    let p2name, p1roll, p2roll, p1name;
    p1 = 0;

    p1name = PROMPT.question(`\nPlayer please enter you'r name: `);
    p2name = PROMPT.question(`\nNext player please enter you'r name: `);

    do {
        console.log(p1name + " roll first");
        p1roll = Math.floor(Math.random() * 6) + 1;
        console.log(p1roll+"=p1roll");
        console.log(p2name + " roll second");
        p2roll = Math.floor(Math.random() * 6) + 1;
        console.log(p2roll+"=p2roll");
        if (p1roll > p2roll){
            p1 = p1name;
            p2 = p2name;
            }else if (p2roll > p1roll){
            p1 = p2name;
            p2 = p1name;
            }else{
            console.log("It was a tie lets try again!");
            p1 = 0;
            }
        console.log("p1="+p1+" p2="+p2);
    }while (p1 === 0);

    turn = 0;
}

function turnChanger() {
    if (turn === 0) {
        turn = 1;
    } else {
        turn = 0;
    }
    console.log("..*turn*..." + turn);
}

function rollDice(){
    rolld1 = Math.floor(Math.random() * 6) + 1;
    rolld2 = Math.floor(Math.random() * 6) + 1;
    roll = rolld1 + rolld2;
    console.log('..roll...-'+roll+'  rolld1-'+rolld1+'  rolld2-'+rolld2);
}

function scoreTurn(){
    if (turn === 0){
        if (rolld1 !== 1 && rolld2 !== 1){
            p1score = p1score + roll;
        }else if (rolld1 === 1 && rolld2 === 1){
            p1score = 0;
        }
    } else if (rolld1 !==1 && rolld2 !== 1) {
        p2score = p2score + roll;
    } else if (rolld1 === 1 && rolld2 === 1){
        p2score = 0;
    }
    console.log("p1score="+p1score+"   p2score="+p2score);
}

function rollAgain(){
    if (rolld1 !== 1 && rolld2 !== 1){
        console.log('roll again');
    }else{
        turnChanger();
        console.log('not roll again *****turn*****'+ roll);
    }
}
function scoreGame(){
console.log(p1 + ' scored: ' + p1score +"  "+ p2 + ' scored: '+p2score);
}

function printWinner(){
    if (p1score>p2score){
        winner = p1;
    } else{
        winner = p2;
    }
console.log('the winner is '+ winner);
}
// ----Above this line is section 4, mutator & worker/utility methods----

