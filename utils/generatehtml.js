const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


function generateteamcards(teamarry) {
    const finalhtml = []

    function managercard(manager) {
        return `

<link href=""https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
<title>Employee Roster</title>
<div class="card employee-card">
<div class="card" style="width: 18rem;">
    <h2 class="card-title">${manager.getname()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getrole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.getid()}</li>
    <li class="list-group-item">Email <a href="mail to:${manager.getemail()}"> ${manager.getemail()}</a></li>
    <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
    </ul>
</div>
</div>;
`}
    function engineercard(engineer) {
        return `
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${engineer.getname()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getrole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${engineer.getid()}</li>
    <li class="list-group-item">Email <a href="mail to:${engineer.getemail()}"> ${engineer.getemail()}</a></li>
    <li class="list-group-item"><a href ="Github:${engineer.getgithub()}"></a></li>
    </ul>
</div>
</div>;
`}
    function interncard(intern) {
        return `
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${intern.getname()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getrole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${intern.getid()}</li>
    <li class="list-group-item">Email <a href="mail to:${intern.getemail()}">${intern.getemail()}</a></li>
    <li class="list-group-item"> ${intern.getschool()}</li>
    </ul>
</div>
</div>;
`}

    finalhtml.push(teamarry.filter(employee => employee.getrole() === "manager").map(data => managercard(data)));
    finalhtml.push(teamarry.filter(employee => employee.getrole() === "engineer").map(data => engineercard(data)));
    finalhtml.push(teamarry.filter(employee => employee.getrole() === "intern").map(data => interncard(data)));


    return finalhtml.join('')
}




module.exports = teamarry => {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    ${generateteamcards(teamarry)}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>`
}