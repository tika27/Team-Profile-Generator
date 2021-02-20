const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // this.title = "Manager"
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return 'Manager';
    }
}

module.exports = Manager;