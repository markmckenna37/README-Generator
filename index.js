//Global variables and require functions
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user

function promptUser() {
    return inquirer.prompt([{
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "Enter your email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "github"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please give a brief description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "Enter your instructions on how to retrieve and install your project.",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter a description on how to use your project.",
            name: "usage"
        },
        {
            // list for license choices
            type: "list",
            message: "Choose a License from the following list:",
            choices: ["MIT", "Apache", "Apache2", "GPL", "CPAN", "BSD"],
            name: "license"
        },
        {
            type: "input",
            message: "Enter information for project contributors.",
            name: "contributing"
        },
        {
            type: "input",
            message: "Enter testing information",
            name: "tests"
        }
    ])
}


// async function to initialize the generate MD function
async function init() {
    // tries to execute the following code

        // variable containing the data prompted from the user
        const userInput = await promptUser()
        console.log(userInput);
        // variable retrieves the MD template from generateMarkdown.js page
        const readmeText = generateMarkdown(userInput);
        console.log(readmeText);
        // awaits for the generated data, writes it to a "README.md" file
        await writeFileAsync("README.md", readmeText)
        console.log("Success!");
        // catching if there is an error

}

// calling function to start the inquirer prompt
init();

