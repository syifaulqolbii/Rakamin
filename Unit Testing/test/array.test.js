test("array ", () => {
    const frameworks = [
        "Node JS",
        "React JS",
        "Vue JS",
        "Angular JS",
    ]
    expect(frameworks).toContain("Node JS")
    expect(frameworks).toEqual([
        "Node JS",
        "React JS",
        "Vue JS",
        "Angular JS",
    ])

    const unitTesttingLibrary = [
        {
            name: "Jest",
            version: "v26.4.2",
        },
        {
            name: "Mocha",
            version: "v8.1.3",
        },
        {
            name: "Chai",
            version: "v4.2.0",
        },
    ]
    expect(unitTesttingLibrary).toContainEqual({
        name: "Jest",
        version: "v26.4.2",
    })
})