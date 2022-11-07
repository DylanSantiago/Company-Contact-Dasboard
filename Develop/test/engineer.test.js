const Engineer =require("../lib/Engineer");

test("Can set Github account via consturctor", () => {
    const testValue = "GithubUser";
    const d = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(d.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const d = new Engineer("Foo", 1, "test@test.com", 100);
    expect(d.getRole()).toBe(testValue);
});

test("Can get Github username via getGithub()", () => {
    const testValue = "GithubUser";
    const d = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(d.getGithub()).toBe(testValue);
});