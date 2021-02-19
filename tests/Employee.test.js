const Employee = require("../lib/Employee");

test("Employee class", () => {
  it("Can return instance of object when new Employee is created", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  it("Can set name  new Employee is created", () => {
    const testName="Sam";
    const e = new Employee(testName,"test@test.com","2");
    expect(newPerson.name).toBe(testName);
  });

  it("Can return name when getName is called", () => {
    const testValue = 100;
    const e = new Employee("Lola", testValue);
    expect(e.id()).toBe(testValue);
  });

  it("Can return email when getEmail is called", () => {
    const testValue = "test@test.com";
    const e = new Employee("Lola", 2, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  it("Can return email when Email is called", () => {
    const testValue = "Sam";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  it("Can return id when called", () => {
    const testValue = "100";
    const e = new Employee("Lola", testValue);
    expect(e.getId()).toBe(testValue);
  });

  it("Can return Email when called", () => {
    const testValue = "test@test.com";
    const e = new Employee("Lola", 2, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  it("getRole() return Employee \"Empolyee\"", () => {
    const testValue ="Employee";
    const e = new Employee("Sam", 2, "test@test.com");
    expect(e. getRole()).toBe(testValue);
  });
 
});