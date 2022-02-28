// ✅ a command-line application that accepts user input
// ✅ I am prompted for information about my application repository
// ✅ a high-quality, professional README.md is generated with the title of my project and sections entitled ✅ Description, ✅ Table of Contents, ✅ Installation, ✅ Usage, ✅ License, ✅ Contributing, ✅ Tests, and ✅ Questions
// ✅ I enter my project title
// ✅ this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// ✅  I choose a license for my application from a list of options
// ✅  a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// ✅ I enter my GitHub username
// ✅ this is added to the section of the README entitled Questions, with a link to my GitHub profile
// ✅ I enter my email address
// ✅ this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// ✅ I click on the links in the Table of Contents
// ✅ I am taken to the corresponding section of the README

const fs = require('fs');
const generateReadme = require('./generateReadme.js');
const readmeLicense = require('./licenses.js');

const readmeJamboree = function ({ title, description, instructions, usage, license, contributing, tests, github, email }) {
  console.log(license);
  const licenseIndex = addLicenseBadge(licenseChoices, license);
  console.log(licenseIndex);
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

<img src="${usage}" width="490" height="340" alt="${title}/>

## License

${licenseChoices[licenseIndex].section}
${licenseChoices[licenseIndex].badge}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions, you can visit my GitHub Page at <a href="https://github.com/${github}" target="_blank">${github}</a>.

You can also email me at <${email}>.
`};

const init = () => {
  generateReadme()
  // Use File System to generate the readme file
  .then((response) => fs.writeFileSync('README.md', readmeJamboree(response)))
  .then(() => console.log("Get out your maracas, we did it!"))
  .catch((error) => console.error(error));    
};

init();