// function to generate markdown for README
const fs = require("fs") 
function generateMarkdown(data) {
  return `
  # ${title}
  ## Description 
  ${description}
              
  --- 
              
  ## Table of Contents
              
              
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#license)
              
  ---
              
  ## Installation
              
  ${installation}
              
              
  ---
              
  ## Usage 
              
  ${usage}
              
  ---
              
  ## Contributing
              
  ${contributing}
              
  ---
              
  ## License
              
  ${license}
              
  ---
              
              
  ## Badges
              
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
              
  ---
              
  ## Questions/Contribution
              
  ${questions}
              
  ---
              
  ## Tests
              
  ${tests}
`;
}

module.exports = generateMarkdown;
generateMarkdown(data);

// fs.readFile("generateMarkdown.js", "utf8", (err, data) => {
//   if (err) throw err;