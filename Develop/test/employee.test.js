const Employee = require("../lib/employee")

test("Can instantiate Employee instance", () => {
    const d = new Employee();
    expect(typeof(d)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "John";
    const d = new Employee(name);
    expect(d.name).toBe(name)
})

test("Can set id via constructor arguments", () => {
    const testValue = 100;
    const d = new Employee("Foo", testValue);
    expect(d.id).toBe(testValue);
})

test("Can set email via constructor arguments", () => {
    const testValue = "test@test.com";
    const d = new Employee("Foo", 1, testValue);
    expect(d.email).toBe(testValue);
});

test("Can set name via getName()", () => {
    const testValue = "John";
    const d = new Employee(testValue);
    expect(d.getName()).toBe(testValue);
});

test("Can get ID via getId()", () => {
    const testValue = 100;
    const d = new Employee("Foo", testValue);
    expect(d.getId()).toBe(testValue)
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const d = new Employee("Foo", 1, testValue);
    expect(d.getEmail()).toBe(testValue)
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const d = new Employee("Foo", 1, "test@test.com");
    expect(d.getRole()).toBe(testValue)
});