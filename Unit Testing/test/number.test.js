test("numbers ", () => {
    let number = 1 + 1

    expect(number).toBeGreaterThan(1)
    expect(number).toBeGreaterThanOrEqual(2)
    expect(number).toBeLessThan(3)
})
