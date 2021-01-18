// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Link to Deployed Application: 
  ### [${data.URLname}](${data.URL})
  
  ---

  ## Description
 ### ${data.description}

 ---

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

---

  ## Installation
  ### ${data.installation}

  ---

  ## Usage
  ### ${data.usage}

  ---

  ## License
  ### ${data.license}

  ---

  ## Contributing
  ### ${data.contributing}

  ---

  ## Tests
  ### ${data.tests}

  ---

  ## Any Questions?
  ### [Click here to email me.](mailto:${data.email}) 

  
  `;
}

module.exports = generateMarkdown;
