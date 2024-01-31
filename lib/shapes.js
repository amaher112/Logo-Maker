// Parent class of Shape that sets the text, text color and shape color
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(newColor) {
    this.textColor = newColor;
  }
  setText(newText) {
    this.text = newText;
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// Children classes that inherit text, text color and shape color, and renders the selected shape
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="200,10 300,210 110,210" fill="${this.shapeColor}" /> <text x="200" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="${this.shapeColor}" /> <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
