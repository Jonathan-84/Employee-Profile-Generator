const Manager = require("../lib/Manager");

test("Set officeNumber", () => {
    const manager = new Manager("John", 1, "john@outlook.com", 6108576309);
    expect(manager.officeNumber).toBe(6108576309);
    });

test("Get role via getRole()", () => {
    const manager = new Manager("John", 1, "john@outlook.com", 6108576309);
    expect(manager.getRole()).toBe("Manager");
});

test("Get office number via OfficeNumber()", () => {
    const manager = new Manager ("John", 1, "john@outlook.com", 6108576309);
    expect(manager.getOfficeNumber()).toBe(6108576309);
});