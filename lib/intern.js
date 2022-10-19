const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
        this.role = "intern"
    }
    getschool() {
        return this.school

    }    
    getrole() {
        return this.role
    }

}
module.exports = Intern