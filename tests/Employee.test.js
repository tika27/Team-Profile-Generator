const Employee = require("../lib/Employee");

// test("Employee class", () => {
  test("Can return instance of object when new Employee is created", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name  new Employee is created", () => {
    const testName="Sam";
    const e = new Employee(testName);
    expect(e.name).toBe(testName);
  });

  test("Can return name when getName is called", () => {
    const testValue = 100;
    const e = new Employee("Lola", testValue);
    expect(e.id).toBe(testValue);
  });

  test("Can return email when getEmail is called", () => {
    const testValue = "test@test.com";
    const e = new Employee("Lola", 2, testValue);
    expect(e.getEmail).toBe(testValue);
  });

  test("Can return email when Email is called()", () => {
    const testValue = "Sam";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can return id when called()", () => {
    const testValue = "100";
    const e = new Employee("Lola", testValue);
    expect(e.getId()).toBe(testValue);
  });

  test("Can return Email when called()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Lola", 2, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() return Employee \"Employee\"", () => {
    const testValue ="Employee";
    const e = new Employee("Sam", 2, "test@test.com");
    expect(e. getRole()).toBe(testValue);
  });
 
// });