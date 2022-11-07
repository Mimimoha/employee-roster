const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
const teamarry = []
const html = require('./utils/generatehtml')




function managerPrompt() {
    console.log("please enter manager information")

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name'
            },

            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter employee ID'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Enter email address'
            },

            {
                type: 'input',
                name: 'phone',
                message: 'Enter office number'
            },

        ])
        .then((response) => {
            let manager = new Manager(response.name, response.employeeId, response.email, response.phone)
            teamarry.push(manager)

            console.log(teamarry)
            newEmployee()
        });
}

function engineerPrompt() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name'
            },

            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter employee ID'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Enter email address'
            },

            {
                type: 'input',
                name: 'github',
                message: 'Enter Github username'
            },

        ])
        .then((response) => {
            let engineer = new Engineer(response.name,response.employeeId, response.email, response.github)
            teamarry.push(engineer)

            console.log(teamarry)
            newEmployee()
        });
}

function internPrompt() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name'
            },

            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter employee ID'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Enter email address'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter school name'
            },
        ])
        .then((response) => {
            let intern = new Intern(response.name, response.employeeId, response.email, response.school)
            teamarry.push(intern)

            console.log(teamarry)
            newEmployee()
        });
}

function newEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "newmember",
                message: "Do you want to add new employee?",
                choices: ['manager', 'engineer', 'intern', 'none']
            }
        ])
        .then((response) => {
            if (response.newmember === 'manager') {
               managerPrompt()
            }
            if (response.newmember === 'engineer') {
                engineerPrompt()
            }
            if (response.newmember === 'intern') {
                internPrompt()
            }
            else {
                console.log("team member created!!")
                buildteam()
            }
        })
}

managerPrompt()

function buildteam() {
    fs.writeFileSync('./dist/index.html', html(teamarry))

}

