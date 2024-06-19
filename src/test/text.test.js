const text = require('./text')

test('mostra meu texto mais a', () => {
    expect(text("oi")).toBe("oia")
})