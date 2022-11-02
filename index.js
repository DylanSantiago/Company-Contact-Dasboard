const Manager = require("./Develop/lib/manager");
const Engineer= require("./Develop/lib/engineer");
const Intern = require("./Develop/lib/intern");
const inquirer = require("inquirer")

const staff = [];

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
            name: 'office',
            message: 'What is your office #?',
        }
    ])
    .then(({name, id, email, office}) => {
        this.Manager = new Manager(name, id, email, office);
        staff.push(this.Manager)
        getRole();
    })
}

function getRole() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'staff',
            message:'Would you like to add more Team Members?',
            choices: [
                'Engineer',
                'Intern',
                'No'
            ]
        }
    ])
    .then (({add}) => {
        if(add === 'Engineer') {
            addEngineer();
        }
        else if (add === 'Intern') {
            addIntern
        }
        else if (add === 'No') {

        }
    })
};

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

function addStaff () {

}

