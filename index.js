// Each shape has its own test
//
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your text here, no more than 3 characters",
      name: "text",
    },
    {
      type: "input",
      message: "Please choose a text color",
      name: "text-color",
    },
    {
      type: "list",
      message: "Please choose a shape:",
      name: "shape",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      message: "Please choose a shape color",
      name: "shape-color",
    },
  ])
  .then((data) => {
    // fs.writeFile("logo.svg", )
    console.log("Generated logo.svg")
  });
