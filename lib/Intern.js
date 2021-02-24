const Employee = require("./Employee");

class Intern extends Employee {
    constructor(myname, myid, myemail, myschool) {
        super(myname, myid, myemail);
        this.school = myschool;
        this.title = "Intern";

    }

    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;