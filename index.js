#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([{
        message: "Enter your guess number is 1 to 10",
        type: "number",
        name: "GuessNumber",
    }]);
console.log(answer);
if (answer.GuessNumber === randomNumber) {
    console.log("Congratulation! your guess is right");
}
else {
    console.log("you wrong");
}
