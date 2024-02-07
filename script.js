// currying

const multiply = (a,b) => a + b;
const curriedMultiply = (a) => (b) => a * b;
// carriedMultiply(3);
const multiplyBy5 = curriedMultiply(5);