const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const date = new Date();
const year = date.getFullYear();
// array of questions for user


function promptUser() {
    return inquirer.prompt([
        {
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
            // entering information, will adjust later
            type: "input",
            message: "Enter your GitHub username.",
            name: "github"
        },
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

function generateMD(userInput) {
    return `
# ${userInput.title}

## Testing

![GitHub License](https://img.shields.io/badge/license-${userInput.license}-blue.svg)
---

## Description 
${userInput.description}
                    
--- 
                    
## Table of Contents
                    
                    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#license)
                    
---
                    
## Installation
                    
${userInput.installation}
                    
                    
---
                    
## Usage 
                    
${userInput.usage}
                    
---
                    
## Contributing
                    
${userInput.contributing}
                    
---
                    
## License
                    
This project is licensed under ${userInput.license}.

Copyright (c) [${year}] [${userInput.name}]

                    
---
                    
                    
                    
## Questions
Have any questions or contributions? Check out my [GitHub Profile](https://github.com/${userInput.github})                 
Or you can email me at <${userInput.email}>.
                    
---
                    
## Tests
                    
${userInput.tests}
`
}






// function to initialize program
async function init() {
    try {
        const userInput = await promptUser()
        const readmeText = generateMD(userInput);
        await writeFileAsync("REEDME.md", readmeText)
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();