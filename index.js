const inquirer = require("inquirer");
const fs = require("fs") 
// array of questions for user
const questions = [
    inquirer.prompt([
            {
                // entering information, will adjust later
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
             type: "input",
             message: "Enter your licensing information",
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
            },
            {
             type: "input",
             message: "Enter information to receive questions and contributions",
             name: "questions"
            }
        ]).then(({title, description, installation, usage, license, contributing, tests, questions}) => {
            console.log(title, description, installation, usage, license, contributing, tests, questions)
            fs.readFile("generateMarkdown.js", "utf8", (err, data) => {
                if (err) throw err;
                const readmeText = JSON.parse(data)
                writeToFile("REEDME.md", readmeText)
            })
        })
]          

        
    



// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
}

// function call to initialize program
init();

