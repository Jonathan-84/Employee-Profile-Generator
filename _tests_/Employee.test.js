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
    const employee = new Employee ('John', 1,  'john@outlook.com');
    expect(employee.email).toBe('john@outlook.com');
});

test('getRole() should return Employee', () => {
    const employee = new Employee("John", 1, "john@outlook.com");
    expect(employee.getRole()).toBe('Employee');
});

test("Get name via getName()", () => {
        const employee = new Employee('John');
        expect(employee.getName()).toBe('John');
    });

test("Get id via getId()", () => {
        const employee = new Employee("Foo", 27);
        expect(employee.getId()).toBe(27);
    });

test("Can get email via getEmail()", () => {
        const employee = new Employee("Foo", 1, 'john@outlook.com');
        expect(employee.getEmail()).toBe('john@outlook.com');
    });



// Need to fix the email and role email