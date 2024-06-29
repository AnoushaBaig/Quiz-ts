#! /usr/bin/env node
import inquirer from "inquirer"

import chalk from "chalk"
console.log(chalk.bgMagentaBright.italic("\t\tWelcome to `Anousha Baig` Quiz Game!!!"));

const quiz :{
    question_01: string;
    question_02: string;
    question_03: string;
    question_04: string;
    question_05: string;
    question_06: string;
    question_07: string;
    question_08: string;
    question_09: string;
    question_10: string;
} = await inquirer.prompt([
    {
        name:"question_01",
        type:"list",
        message:"Q1..What is AI?",
        choices:[".Artficial intelligence",".Argent intelligent",".Artificial internet"]
    },
    {
        name:"question_02",
        type:"list",
        message:"Q2..Which programming language is known for its use in building web applications?",
        choices:[".Python",".Java",".JavaScript",".C++"] 
    },
    {
        name:"question_03",
        type:"list",
        message:"Q3..Which typescript feature is allowes to combine type together to from  a new type?",
        choices:[".Interface",".Classes",".Enums",".Union type"] 
    },
    {
        name:"question_04",
        type:"list",
        message:"Q4..What is TypeScript?",
        choices:[".A JavaScript framework",".A statically typed superset of JavaScript",".A server-side programming language",".An HTML templating language"]
    } ,
    {
        name:"question_05",
        type:"list",
        message:"Q5..Which method of inquirer.js is used to start a prompt interface?",
        choices:[".start()",".prompt()",".init()",".run()"]
    } ,
    {
        name:"question_06",
        type:"list",
        message:"Q6..Which of the following is true about TypeScript enums?",
        choices:[".Enums can only store numeric values.",".nums can store both numeric and string values.",".Enums cannot have initializers.",".Enums can only have one member."]//b
    } ,
    {
        name:"question_07",
        type:"list",
        message:"Q7..Which keyword is used to define a variable in TypeScript that cannot be reassigned?",
        choices:[".Let",".Const",".Var",".Static"]
    }  ,
    {
        name:"question_08",
        type:"list",
        message:"Q8..What does the any type denote in TypeScript?",
        choices:[".Any data type",".A specific data type",".Void",".Undefined"]
    },
    {
        name:"question_09",
        type:"list",
        message:"Q9..Which of the following is not a valid TypeScript primitive type?",
        choices:[".array",".object",".Void",".boolean"]
    }, 
    {
        name:"question_10",
        type:"list",
        message:"Q10..Which operator in TypeScript checks for both type and value equality?",
        choices:[".==",".=",".===",".!=="]
    },                                  
                                 

]) 
let score: number = 0;
if (quiz.question_01 === ".Artficial intelligence") {
    console.log("1. Correct!");
    score++;
} else {
    console.log("1. Incorrect");
} if (quiz.question_02 === ".JavaScript") {
    console.log("2. Correct!");
    score++;
} else {
    console.log("2. Incorrect");
} if (quiz.question_03 === ".Union type") {
    console.log("3. Correct!");
    score++;
} else {
    console.log("3. Incorrect");
}if (quiz.question_04 === ".A statically typed superset of JavaScript") {
    console.log("4. Correct!");
    score++;
} else {
    console.log("4. Incorrect");
}if (quiz.question_05 === ".prompt()") {
    console.log("5. Correct!");
    score++;
} else {
    console.log("5. Incorrect");
 } if (quiz.question_06 === ".nums can store both numeric and string values.") {
        console.log("6. Correct!");
        score++;
    } else {
        console.log("7. Incorrect");
    }if (quiz.question_07 === ".Const") {
            console.log("7. Correct!");
            score++;
        } else {
            console.log("6. Incorrect");
        }if (quiz.question_08 === ".Any data type") {
                console.log("8. Correct!");
                score++;
            } else {
                console.log("8. Incorrect");
            }if (quiz.question_09 === ".array") {
                console.log("8. Correct!");
                score++;
            } else {
                console.log("8. Incorrect");
            }if (quiz.question_10 === ".===") {
                console.log("8. Correct!");
                score++;
            } else {
                console.log("8. Incorrect");
}console.log(chalk.redBright.italic(`You have ${score} scored!!!`));



