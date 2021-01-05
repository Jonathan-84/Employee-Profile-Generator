const Intern = require("../lib/Intern");

test("Set the interns school", () => {
const intern = new Intern ("John", 1, "john@outlook.com", "Penn");
expect(intern.school).toBe("Penn");
});

test('getSchool() should return school name', () => {
    const intern = new Intern("John", 1, "john@outlook.com", "Penn");
    expect(intern.getSchool()).toBe("Penn");
});

test('getRole() should return Intern', () => {
    const intern = new Intern("John", 1, "john@outlook.com", "Penn");
    expect(intern.getRole()).toBe('Intern');
});