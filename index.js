const Manager = require("./Develop/lib/manager");
const Engineer= require("./Develop/lib/engineer");
const Intern = require("./Develop/lib/intern");
const inquirer = require("inquirer")

function promptManager () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: '',
            },
            {
                type: 'input',
                name: 'name',
                message: '',
            },
            {
                type: 'input',
                name: 'name',
                message: '',
            },
        ])
}

function addEngineer () {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: '',
        },
        {
            type: 'input',
            name: 'name',
            message: '',
        },
        {
            type: 'input',
            name: 'name',
            message: '',
        },
        {
            type: 'input',
            name: 'name',
            message: '',
        },
    ])
}

function addIntern () {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: '',
        },
        {
            type: 'input',
            name: 'name',
            message: '',
        },
        {
            type: 'input',
            name: 'name',
            message: '',
        },
        {
            type: 'input',
            name: 'name',
            message: '',
        },
    ])
}

