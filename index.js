
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

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */

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

/**
 * @method
 * @desc p1 and p2 mutator
 * @returns {null}
 */

function getPlayerInfo(){
    let p2name, p1roll, p2roll, p1name;
    p1 = 0;

    p1name = PROMPT.question(`\nPlayer please enter you'r name: `);
    p2name = PROMPT.question(`\nNext player please enter you'r name: `);

    do {
        console.log("\nWe will roll to see who goes first. Highest will go first. Good Luck!\n");
        console.log(p1name + " roll first");
        p1roll = Math.floor(Math.random() * 6) + 1;
        console.log(p1roll + " = " + " roll\n");
        console.log(p2name + " roll second");
        p2roll = Math.floor(Math.random() * 6) + 1;
        console.log(p2roll + " = " + " roll\n");
        if (p1roll > p2roll){
            p1 = p1name;
            p2 = p2name;
            }else if (p2roll > p1roll){
            p1 = p2name;
            p2 = p1name;
            }else{
            console.log("It was a tie lets try again!\n\n");
            p1 = 0;
            }
        if (p1 !== 0) {
            console.log("The player going first will be " + p1 + " and second will be " + p2 + "\n");
        }
    }while (p1 === 0);

    turn = 0;
}

/**
 * @method
 * @desc turn mutator
 * @returns {null}
 */

function turnChanger() {
    if (turn === 0) {
        turn = 1;
    } else {
        turn = 0;
    }
    console.log("\n..*turn*..." + turn);
    if (turn === 0){
        console.log("..." + p1 + "'s turn");
    } else{
        console.log("..." + p2 + "'s turn");
    }

}

/**
 * @method
 * @desc roll, rolld1 and rolld2 mutator
 * @returns {null}
 */

function rollDice(){
    rolld1 = Math.floor(Math.random() * 6) + 1;
    rolld2 = Math.floor(Math.random() * 6) + 1;
    roll = rolld1 + rolld2;
    console.log('..roll...' + roll + '  first dice = '+rolld1+'  second dice= '+rolld2);
}

/**
 * @method
 * @desc p1score and p2score mutator
 * @returns {null}
 */

function scoreTurn(){
    if (turn === 0){
        if (rolld1 !== 1 && rolld2 !== 1 && rolld1 !== rolld2){
            p1score = p1score + roll;
        }else if (rolld1 === 1 && rolld2 === 1){
            p1score = 0;
        }else if (rolld1 === rolld2){
            p1score = p1score + (roll * 2);
        }
    } else if (rolld1 !== 1 && rolld2 !== 1 && rolld1 !== rolld2) {
        p2score = p2score + roll;
    } else if (rolld1 === 1 && rolld2 === 1){
        p2score = 0;
    }else if (rolld1 === rolld2){
        p2score = p2score + (roll * 2);
    }
    console.log("Score: " + p1 + " " + p1score + "   " + p2 + " " + p2score);
}

/**
 * @method
 * @desc Utility: calls turnChanger
 * @returns {null}
 */

function rollAgain(){
    if (rolld1 !== 1 && rolld2 !== 1){
        console.log('roll again');
    }else{
        turnChanger();
        console.log('\nChanged*****turn*****->:'+ roll + " " + rolld1 + " " + rolld2 + '\n' );
    }
}

/**
 * @method
 * @desc winner mutator
 * @returns {null}
 */

function scoreGame(){
    if (p1score>p2score){
        winner = p1;
    } else{
        winner = p2;
    }
}

/**
 * @method
 * @desc Utility: outputs results
 * @returns {null}
 */

function printWinner(){
    console.log(p1 + ' scored: ' + p1score +"  "+ p2 + ' scored: '+p2score);
    console.log('the winner is '+ winner);
}

// ----Above this line is section 4, mutator & worker/utility methods----

