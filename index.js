// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const generatePage = require("./src/template.js")
const writeHTML = require("./dist/team.html");
const { get } = require("https");





const teamMember = [];

function getInfo() {
  function getManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your Manager's name?"
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your Manager's Id?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your Manager's Email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's office Number?"
      }

    ]).then(response => {
      const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
      teamMember.push(manager);
      addingNewMember();
    })
  }
  function getEngineer() {
    inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "what is your engineer name? "
        },
        
        {
          type: "input",
          name: "engineerId",
          message: "what is your engineer Id? "
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "what is your engineer Email? "
        },
        {
          type: "input",
          name: "github",
          message: "what is your engineer Github Username? "
        },

    ]).then(response => {
      const engineer = new Engineer(response.engineerName, response.managerEmail, response.engineerId, response.github);
      teamMember.push(engineer);
      addingNewMember();
    })
  }

  function getIntern (){
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "what is your intern's name? "
      },
      {
        type: "input",
        name: "internId",
        message: "what is your intern's Id? "
      },
      {
        type: "input",
        name: "school",
        message: "what is your intern's School? "
      },
      {
        type: "input",
        name: "internEmail",
        message: "what is your intern's Email? "
      },

    ]).then(response => {
      const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
      teamMember.push(intern);
      addingNewMember();
    })

  }

  function addingNewMember() {
    inquirer.prompt([

      {
        type: "list",
        name: "selectemployees",
        message: "which employee would you like to choose?",
        choices: [
          "engineer",
          "intern",
          "manager",
          "done"
        ]
      }

    ]).then(response => {
      const role = response.selectemployees;
      if (role == "manager") {
        getManager();

      } else if (role == "engineer") {
        getEngineer();

      } else if (role == "intern") {
        getIntern();

      } else if (role == "done") {
        renderTeam();
      }
    });
  }
  addingNewMember()
}

function renderTeam () {
  fs.writeFileSync(('writeHTML', 'team.html'), generatePage(teamMember));
};
getInfo();













// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRender");

//const team = []



// function getInfo() {
//   inquirer.prompt([
//     {
//       type: "list",
//       name: "role",
//       message: "Please choose the employee Role:",
//       choices: ["Manager", "Employee", "Engineer", "Intern"]
//     },
    
//   {
//     type: "input",
//     name: "name",
//     message: "Please enter your employee Name?",
//     validate: nameInput => {
//       if(nameInput) {
//         return true;

//       } else {
//         console.log("Please enter team member name!")
//         return false;
//       }
//     }

//   },
  
//   {
//     type: "input",
//     name: "email",
//     message: "what is your employee email address?",
//     validate: emailInput => {
//       if(emailInput) {
//         return true;

//       } else {
//         console.log("Please enter team member email!")
//         return false;
//       }
//     }

//   },
//   {
//     type: "input",
//     name: "id",
//     message: "Please enter employee Id",
//     validate: IdInput => {
//       if(IdInput) {
//         return true;

//       } else {
//         console.log("Please enter a valid ID!")
//         return false;
//       }
//     }

//   }
    
  
// ])
// .then(employeeAnswers => {

//   if (employeeAnswers.role === "Engineer"){

//     getEngineer(employeeAnswers);

//   }else if (answers.role === "Manager") {
//     inquirer.prompt([{
//       type: "input",
//       name: "office",
//       manager: "Please enter Manager office number",
//       validate: officeInput => {
//         if (officeInput) {
//           return true;
//         } else{
//           console.log("Please enter manager office number!")
//         }

//       }
   
//     }])
//     .then(answer => {
//       console.log(answer.office)
//       const someManager = new Manager(answers.name, answers.email, answer.id, answer.role, answer.github)


//     })
//   }

// })
// }


// function getEngineer(employeeAnswers)
// {
//   console.log(employeeAnswers)
//   inquirer.prompt([{
//     type: "input",
//     name: "github",
//     message: "github",
//     validate: nameInput => {
//       if(nameInput) {
//         return true;

//       } else {
//         console.log("Please enter github name!")
//         return false;
//       }
//     }

//   },
//     {
//       type: "input",
//       name: "managerName",
//       message: "What is your Manager's name?"
//     },
//      {
//       type: "input",
//       name: "managerId",
//       message: "What is your Manager's Id?"
//       },
//       {
//       type: "input",
//       name: "managerEmail",
//       message: "What is your Manager's Email?"
//       },
//      {
//       type: "input",
//       name: "officeNumber",
//       message: "What is your Manager's office Number?"
//       }
// ])
// .then(engineerAnswer=>{
//   console.log(engineerAnswer)
   

// })
  
// }
// getInfo ()
