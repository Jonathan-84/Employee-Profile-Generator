// Employee is Character equivalent + test
// Require it on the others
// Manager , Engineer, Intern will only have their core addons listed
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/renderHtml.js");

const employees = [];

function init() {
    addManager();
  }


const addManager = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?",
          },
    {
        type: "input",
        name: "id",
        message: "Enter Manager's id",
        
    },
    {
        type: "input",
        name: "email",
        message: "Enter Manager's email address",
    },
    {
        type: "input",
        name: "number",
        message: "What is the Manager's office number?",
    },
    ])
    .then(data=>{
        const manager = new Manager (data.name, data.id, data.email, data.number);
        employees.push(manager);
        addEmployee();
    })

}

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
          },
    {
        type: "input",
        name: "id",
        message: "Enter Engineer's id",
        
    },
    {
        type: "input",
        name: "email",
        message: "Enter Engineer's email address",
    },
    {
        type: "input",
        name: "username",
        message: "What is the Engineer's GitHub Username?",
    },
    ])
    .then(data=>{
        const engineer = new Engineer (data.name, data.id, data.email, data.username);
        employees.push(engineer);
        addEmployee();
    })
}
    const addIntern = () => {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
              },
        {
            type: "input",
            name: "id",
            message: "Enter Intern's id",
            
        },
        {
            type: "input",
            name: "email",
            message: "Enter Intern's email address",
        },
        {
            type: "input",
            name: "username",
            message: "What is the name of the Intern's school?",
        },
        ])
        .then(data=>{
            const intern = new Intern (data.name, data.id, data.email, data.school);
            employees.push(intern);
            addEmployee();
        })
    }
    
const addEmployee = () => {
    inquirer.prompt ([
        {
            type: "list",
            name: "type",
            message: "Do you want to add additional team members?",
            choices: [
                "Engineer",
                new inquirer.Separator(),
                "Intern",
                new inquirer.Separator(),
               " No, I don't wish to add more",
            ],
          },
        ])
        .then (data=> {
            switch(data.type) {
                case "Engineer":
                    addEngineer()
                    break;
                case "Intern":
                    addIntern()
                    break;
                default: 
                buildHtml()
            }
        })
}

 const buildHtml=()=> 
 {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
  

}
init();