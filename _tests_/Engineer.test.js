const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer");

test("Set Github account", () => {
const engineer = new Engineer ("John", 1, "john@outlook.com", "John1234");
expect(engineer.github).toBe("John1234");
});

test('getGithub() should return github name', () => {
    const engineer = new Engineer("John", 1, "john@outlook.com", "John1234");
    expect(engineer.getGithub()).toBe("John1234");
});

test('getRole() should return Engineer', () => {
    const engineer = new Engineer("John", 1, "john@outlook.com", "John1234");
    expect(engineer.getRole()).toBe('Engineer');
});