const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('create a employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test('create employee name', () => {
    const employee = new Employee('John');
    expect(employee.name).toBe('John');
});

test('create an employee id', () => {
const employee = new Employee ('John', 27);
expect(employee.id).toBe(27);
});

test('create employee email', () => {
    const employee = new Employee ('John', 'john@outlook.com');
    expect(employee.getEmail).toBe('john@outlook.com');
});

test('create employee role', () => {
    const employee = new Employee ('John', 'CEO');
    expect(employee.getRole).toBe('CEO');
});


// Need to fix the email and role email