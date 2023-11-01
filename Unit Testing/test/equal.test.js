test("test using toBe", () => {
    let name  = "Node JS"
    let greeting = "Welcome to " + name

    expect(greeting).toBe("Welcome to Node JS")
})

test("test using toEqual", () => {
    let frameworkJs = {
        name: "Node JS",
        version: "v12.18.3",
    }

    expect(frameworkJs).toEqual({
        name: "Node JS",
        version: "v12.18.3",
    })
})