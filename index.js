// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "please name your project",
  },
  {
    type: "input",
    name: "description",
    message: "please describe the purpose and fuctionailty of this project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license that applies to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "usage",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "usage",
    message: "State the languages and technologies used.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd().fileName).data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      console.log(responses);
      // Handle responses
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// Function call to initialize app
init();
