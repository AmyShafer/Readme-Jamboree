
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./generateReadme.js');
const licenseInfo = require('./licenses.js');

// creates readme based on user input
const readmeJamboree = function ({ title, description, instructions, usage, license, contributing, tests, github, email }) {
  console.log("License selected: " + license);
  licenseInfo(license);
  return `
# ${title}

${description}

## Table of contents
* [Install-Instructions](#install-instructions)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [![Made for Penn LPS](https://img.shields.io/static/v1?label=Made+for&message=Penn+LPS&color=%23005bbc)](https://bootcamp.sas.upenn.edu/)
* [![Made with JavasScript](https://img.shields.io/static/v1?label=Made+with&message=JavaScript&color=%23FFd600)](https://www.javascript.com)

## Install Instructions

${instructions}

## Usage

Here's a look at the application in action:

![${title}](/assets/images/${usage})

## License

${licenseInfo(license)}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions, you can visit my GitHub Page at <a href="https://github.com/${github}" target="_blank">${github}</a>.

You can also email me at ${email}.
`};

// runs the program
const init = () => {
  generateReadme()
  // Use File System to generate the readme file
  .then((response) => fs.writeFile('./output/RichardReadME.md', readmeJamboree(response), function (err) {
    if (err) {
      throw err;
    }
  }))
  // .then(() => console.log("Get out your maracas, we did it!"))
  // .catch((error) => console.error(error));    
};

init();