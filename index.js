// the different packages required to read, write, and create the text file
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your README title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide any applicable installation instructions here: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide any applicable usage instructions here: ',
        name: 'usage'
    },
    {
        type: 'list',
        choices: ['GNU', 'MIT', 'BSD', 'Apple Public Source'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'List your project contributors: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'List any project tests conducted: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Provide your email address: ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Name the link to your project:  ',
        name: 'URLname'
    },
    {
        type: 'input',
        message: 'Provide the URL to your deployed project: ',
        name: 'URL'
    },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('File written successfully!')
    )
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownText = generateMarkdown(answers)
        writeToFile("README2.md", markdownText);
    })
    .catch(error => {
        if (error) {
            console.error(error);
        }
    })

}

// function call to initialize program
init();
