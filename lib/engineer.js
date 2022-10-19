const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
        this.role = "engineer"
    }
    getgithub() {
        return this.github

    }
    getrole() {
        return this.role
    }

}
module.exports = Engineer