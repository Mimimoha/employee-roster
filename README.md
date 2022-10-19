# Employee Roster


## Description

Employee Roster is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 
## Installation 
The application will be invoked by using the following command:

```bash
node index.js
```


This project uses the following packages:
[Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).
[Jest package](https://jestjs.io/)


## Usage 

Employee Roster application accepts the following user input:
- User is prompted to enter the team manager’s name, employee ID, email address, and office number.
- User is presented with a menu with the option to add an engineer or an intern or to finish building my team.
- User choose which employee role they want to add to roster 
- If chosen Engineer option, user is prompted to enter the engineer’s name, ID, email, and GitHub username.
- If chosen Intern option, user is prompted to enter the intern’s name, ID, email, and school.
- If chosen Manager option, user is prompted to enter the team manager’s name, employee ID, email address, and office number.
- When user decides to finish building my team, they must choose the 'none' option. Then a HTML is generated with all the employee information. 

## Walkthrough video
please click this [Walkthough video](https://github.com/Mimimoha/readme-generator/blob/main/Readme%20demenstration%20.mp4) link to watch the video. 

## Test 
Please use the [jest package](https://jestjs.io/) to run the tests.

