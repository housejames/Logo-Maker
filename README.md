# Logo Maker

Logo Maker is a command-line application that allows users to generate simple logos for their projects without the need for a graphic designer.

## Features

- User input through a command-line interface.
- Choice of shape (circle, triangle, square) and shape color.
- Option to input text with customizable text color.
- Generates an SVG file with the chosen shape, colors, and text.
- Saves the generated SVG file in the `examples` folder.

## Installation

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the dependencies.

## Usage

To run the application, use the following command:


Follow the prompts to enter the text, text color, shape, and shape color. After providing all the inputs, the application will generate a logo.svg file in the `examples` folder.

## Dependencies

- [Inquirer](https://www.npmjs.com/package/inquirer): For collecting user input.
- [Jest](https://jestjs.io/): For running unit tests.

## Project Structure

````markdown
.
├── examples/            // Example SVG file(s) created with the app
├── lib/                 // Folder for classes or functions
│   ├── shapes.js        // Exports Triangle, Circle, and Square classes
│   └── shapes.test.js   // Jest tests for shapes
├── index.js             // Runs the application using imports from lib/
├── package.json
└── README.md            // App description, setup, and usage instructions

## Screen Recording

- [Link to the file](https://drive.google.com/file/d/1b0Mq2t9sspJhJXOe6mSI4w4a99Id0xTk/view?usp=sharing)


## Testing

To run the unit tests, use the following command: npm test

