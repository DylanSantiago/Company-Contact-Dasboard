const Manager = require("../lib/manager");
const Employee = require("../lib/employee")

test("Can set office number via constructor", () => {
    const testValue = 100;
    const d = new Manager("Foo", 1, "test@test.com", testValue);
    expect(d.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const d = new Manager("Foo", 1, "test@test.com", 100);
    expect(d.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const d = new Manager("Foo", 1, "test@test.com", testValue);
    expect(d.getOfficeNumber()).toBe(testValue);
});