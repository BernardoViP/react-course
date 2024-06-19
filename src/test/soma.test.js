const soma = require("./soma");


test('adds 1 + 2 + 3 + 4 to equal 10' , () => {
    expect(soma(1, 2, 3, 4)).toBe(10);
});