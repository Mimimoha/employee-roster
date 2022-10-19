const Employee = require('./employee')


class Manager extends Employee {
    constructor(name, id, email,officeNumber,) {
        super(name, id, email);
        this.officeNumber = officeNumber
        this.role = "manager"
    }
    getofficeNumber() {
        return this.officeNumber
    }
// might need to change role to return(manager)
    getrole() {
        return this.role
    }

}


module.exports = Manager




