// Employee is Character equivalent + test
// Require it on the others
// Manager , Engineer, Intern will only have their core addons listed
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function init() {
    inquirer.prompt(questions)
    .then(data => {
      console.log(data)
      //writeToFile("README.md", generateMarkdown(data))
    })
  }

/*function addEmployee() {
    inquirer.prompt(*/
        const questions= [
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
          },
    {
        type: "list",
        name: "role",
        message: "Select the emoloyee's role",
        choices: [
            "Engineer",
            new inquirer.Separator(),
            "Intern",
            new inquirer.Separator(),
            "Manager"
        ],
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee's id",
        
    },
    {
        type: "input",
        name: "email",
        message: "Enter employee's email address",
    },
        ];
  /*  .then(function({name, role, id, email}) {
        let uniqueInfo = "";
        if (role === "Engineer") {
            uniqueInfo = "GitHub Username";
        } else if (role === "Intern") {
            uniqueInfo = "Name of School";
        } else {
            uniqueInfo = "Office Phone Number";
        }
        inquirer.prompt([{
            type: "input",
            name: "uniqueInfo",
            message: `Enter employee's ${uniqueInfo}`,
            
        },
        {
            type: "list",
            name: "addEmployees",
            message: "Would you like to add more employee's?",
            choices: [
                "yes",
                new inquirer.Separator(),
                "no"
            ],
            
        }])
    /*    .then(function({uniqueInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, uniqueInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, uniqueInfo);
            } else {
                newMember = new Manager(name, id, email, uniqueInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (addEmployees === "yes") {
                    addEmployee();
                } else {
                    finishHtml();
                }
            });
            
        });
        */


init();