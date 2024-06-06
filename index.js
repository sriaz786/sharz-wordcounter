#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Ente your Sentence to count the word :"
    }]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log("ypur Sentence word count is " + words.length);
