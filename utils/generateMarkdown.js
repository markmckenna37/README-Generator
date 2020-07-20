//global variables and require functions
const date = new Date();
const year = date.getFullYear();
// function to generate markdown for README, retrieving data from index.js

function generateMarkdown(data) {
  return`
# ${data.title}
  
## Testing
  
![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
---
  
## Description 
${data.description}
                      
--- 
                      
## Table of Contents
                      
                      
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
                      
---
                      
## Installation
                      
${data.installation}
                      
                      
---
                      
## Usage 
                      
${data.usage}
                      
---
                      
## Contributing
                      
${data.contributing}
                      
---
                      
## License
                      
This project is licensed under ${data.license}.
  
Copyright (c) [${year}] [${data.name}]
  
                      
---
                                                         
## Questions
Have any questions or contributions? Check out my [GitHub Profile](https://github.com/${data.github})                 
Or you can email me at <${data.email}>.
                      
---
                      
## Tests
                      
${data.tests}
`;
  }

//exporting README.md data
module.exports = generateMarkdown;

