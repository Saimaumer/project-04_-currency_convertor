#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreenBright.bold.italic("\n\t\t ******WELCOME! TO CURRENCY CONVERTOR***** \t\n"));
const currency = {
    USD: 1, // BASE COUNTRY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.green("Enter from currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PRK"],
    },
    {
        name: "to",
        message: chalk.green("Enter your converted currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: chalk.green("Enter your amount"),
        type: "number"
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgBlueBright(convertedAmount));
// console.log (fromAmount);
// console.log (toAmount);
// console.log (amount);
