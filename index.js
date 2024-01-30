const fs = require("fs");
const inquirer = require("inquirer");
const {Shape, Circle, Triangle, Square} = require('./lib/shapes')

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your text here, no more than 3 characters",
      name: "text",
      validate: (input) => {
        if (input.length > 3) {
          return "Must be no more than 3 characters"
        }
        return true
      }
    },
    {
      type: "input",
      message: "Please choose a text color",
      name: "text_color",
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
      name: "shape_color",
    },
  ])
  .then((data) => {
    let shape;
    if (data.shape === "Circle") {
      shape = new Circle()
    } else if (data.shape === "Square") {
      shape = new Square()
    } else {
      shape = new Triangle()
    }
    shape.setColor(data.text_color)
    shape.setText(data.text)
    shape.setShapeColor(data.shape_color)

    fs.writeFile("logo.svg", shape.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg")
    })
    
  });
