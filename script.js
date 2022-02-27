const inquirer = require('inquirer');
const fs = require('fs');

const portfolioHTML = ({ name, location, hobby, food, linked, github }) =>   `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Portfolio Page</title>
    <!-- Bootstrap --> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <div class="p-5 mb-4 bg-primary rounded-3">    
      <div class="container-fluid py-5">    
      <!-- name, location, bio, LinkedIn URL, and GitHub URL -->
        <h1 class="display-5 fw-bold">${name}</h1>
        <h2>${location}</h2>
        <p>My favorite hobby is ${hobby}.</p>
        <p>My favorite favorite food is ${food}.</p>
        <p>You can find me on ${linked} and ${github}.</p> 
      </div>  
    </div>
  </div>  
</body>
</html>
`;

// Pull data from the user inputs to dynamically create a portfolio   
const generatePortfolio = () => {
  return inquirer.prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Where do you live?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'What is your favorite hobby?',
        name: 'hobby',
      },
      {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food',    
      },
      {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linked',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',    
      },
  ]);
};

// Bonus using writeFileSync as a promise
const init = () => {
  generatePortfolio(); 
  // Use the File System to generate the HTML file
  .then((response) => fs.writeFileSync('portfolio.html', portfolioHTML(response)))
  .then(() => console.log('Success on line 73!'))
  .catch((error) => console.error(error));
};

init();