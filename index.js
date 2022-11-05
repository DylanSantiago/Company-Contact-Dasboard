const inquirer = require('inquirer');
const Manager = require('./Develop/lib/manager');
const Engineer= require('./Develop/lib/engineer');
const Intern = require('./Develop/lib/intern');
const fs = require('fs');


const staff = [];

const displayHTML = require("./Develop/lib/generatehtml")

function promptManager () {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Hello Manager, What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID #?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office #?',
        }
    ])
    .then(({name, id, email, officeNumber}) => {
        this.Manager = new Manager(name, id, email, officeNumber);
        staff.push(this.Manager)
        getRole();
    })
}

function addEngineer () {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this Engineers employee ID #?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers Github account?',
        },
    ])
    .then(({name, id, email, github}) => {
        this.Engineer = new Engineer(name, id, email, github);
        staff.push(this.Engineer)
        getRole();
    })
};

function addIntern () {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns ID #?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where does your intern go to school?',
        },
    ])
    .then(({name, id, email, school}) => {
        this.Intern = new Intern(name, id, email, school);
        staff.push(this.Intern)
        getRole();
    })
};

function writeFile(textContent, staff) {
    fs.writeFileSync('./Develop/output/main.html', textContent)
}

function getRole() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'fullStaff',
            message:'Would you like to add more Team Members?',
            choices: [
                'Engineer',
                'Intern',
                'No'
            ]
        }
    ])
    .then (({fullStaff}) => {
        if(fullStaff === 'Engineer') {
            addEngineer();
        }
        else if (fullStaff === 'Intern') {
            addIntern();
        }
        else if (fullStaff === 'No') {
            const textContent = displayHTML(staff);
            writeFile(textContent, staff);
           return console.log("index created!")
        }
    })
};

promptManager();

