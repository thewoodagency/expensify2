const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two number', () => {
    const result = add(3, 4);

    /*if (result !== 7) {
        throw new Error(`You added 3 and 4. The result was ${result}. Expect 7'`);
    }*/
    expect(result).toBe(7);
});

test('should be say Hello jay', () => {
    const result = generateGreeting('Jay');

    expect(result).toBe('Hello Jay');
})