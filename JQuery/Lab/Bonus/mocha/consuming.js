mocha.setup('bdd');

const expect = chai.expect;

// Include and run the test file(s)
document.addEventListener('DOMContentLoaded', function() {
    // Include additional test files as needed
    includeScript('functions.js');
    mocha.run();
});

describe('Mocha Setup', function() {
    it('Add two numbers', function() {
        expect(addTwoNumbers(2, 2)).to.equal(4);
    });

    it('Multiply two numbers', function() {
        expect(multiplyTwoNumbers(3, 5)).to.equal(15);
    });
});


function includeScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}
