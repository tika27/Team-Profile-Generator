const Engineer = require("../lib/Engineer");

test("Can set Github account", () => {

    const testValue = "GitHubUser";
    const e = new Engineer("Lola", 2, "test@test.com", "GitHubUser", testValue);
    expect(e.github).toBe(testValue)

});
test("getRole() should return \"Engineer\"", () => {

    const testValue = "Engineer";
    const e = new Engineer("Lola", 2, "test@test.com", "GitHubUser", testValue);
    expect(e.getRole()).toBe(testValue)

});
test("Can set Github account", () => {

    const testValue = "GitHubUser";
    const e = new Engineer("Lola", 2, "test@test.com", "GitHubUser", testValue);
    expect(e.getGithub()).toBe(testValue)

});