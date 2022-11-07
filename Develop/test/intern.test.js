const Intern =require("../lib/intern");

test("Can set school via consturctor", () => {
    const testValue = "BCC";
    const d = new Intern("Foo", 1, "test@test.com", testValue);
    expect(d.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const d = new Intern("Foo", 1, "test@test.com", 100);
    expect(d.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "BCC";
    const d = new Intern("Foo", 1, "test@test.com", testValue);
    expect(d.getSchool()).toBe(testValue);
});