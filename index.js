const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ]);
    return userInput;
}

function createSVG(shape, shapeColor, text, textColor) {
    let shapeObj;
    let textX, textY;

    switch (shape) {
        case 'circle':
            shapeObj = new Circle();
            textX = 150; // Center X coordinate of circle
            textY = 100; // Center Y coordinate of circle
            break;
        case 'triangle':
            shapeObj = new Triangle();
            textX = 150; // Center X coordinate of triangle
            textY = 100; // Center Y coordinate of triangle
            break;
        case 'square':
            shapeObj = new Square();
            textX = 150; // Center X coordinate of square
            textY = 100; // Center Y coordinate of square
            break;
        default:
            throw new Error('Invalid shape');
    }
    shapeObj.setColor(shapeColor);
    const svgContent = `
        <svg width="300" height="200">
            ${shapeObj.render()}
            <text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
        </svg>
    `;
    return svgContent;
}

async function main() {
    try {
        const userInput = await promptUser();
        const svgContent = createSVG(
            userInput.shape,
            userInput.shapeColor,
            userInput.text,
            userInput.textColor
        );
        const filePath = path.join(__dirname, 'examples', 'logo.svg'); // Path for saving in examples folder
        fs.writeFileSync(filePath, svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
