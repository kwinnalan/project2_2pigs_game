
/**
 *   @author Danforth, Kwinn (kdanforth@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Program that allows two people to play pig2 || created: 09.27.2020
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

// ----Above this line is section 1, comment header block & pragmas/library calls----

let p1, p2, p1score, p2score, winner, roll, turn;
const  MAX_SCORE = 500;

// ----Above this line is section 2, global variable declarations & global constant declarations/assignments----

function main() {
    getPlayerInfo();
    rollDice();
    turnChanger();
    scoreTurn();
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
        console.log(p1name + "roll first");
        p1roll = Math.floor(Math.random() * 6) + 1;
        console.log(p2name + "roll second");
        p2roll = Math.floor(Math.random() * 6) + 1;

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
    }while (p1 === 0);

    turn = 0;
}

function turnChanger(){
    if (turn = 0){
        turn = 1;
    }else {
        turn = 0;
    }
}

function rollDice(){

    roll = Math.floor(Math.random() * 6) + 1;
}

function scoreTurn(){
    if (turn === 0){
        p1score = p1score + roll;
    }else {
        p2score = p2score + roll;
    }
}
// ----Above this line is section 4, mutator & worker/utility methods----

