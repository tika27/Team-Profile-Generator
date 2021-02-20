//const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern");

test("Can set school", () => {
    const testValue = "DU";
    const e = new Intern("Lola", 2, "test@test.com", testValue);
    expect(e.school).toBe(testValue);

});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Lola", 2, "test@test.com", "DU");
    expect(e.getRole()).toBe(testValue);

});

test("Can set school()", () => {
    const testValue = "DU";
    const e = new Intern("Lola", 2, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);

});
