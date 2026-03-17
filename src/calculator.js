#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

class Calculator {
  /**
   * Addition operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division operation
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If divisor is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
}

// Export the Calculator class
module.exports = Calculator;

// CLI functionality
if (require.main === module) {
  const calculator = new Calculator();
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator.js <operation> <number1> <number2>');
    console.log('Operations: add, subtract, multiply, divide');
    console.log('Example: calculator.js add 10 5');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':
        result = calculator.add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 'subtract':
        result = calculator.subtract(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 'multiply':
        result = calculator.multiply(num1, num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case 'divide':
        result = calculator.divide(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
