const {Circle} = require("../lib/shapes.js");

describe("Shape", () => {
  describe("Circle", () => {
    it("should instantiate circle class and set color", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.textColor).toBe("red");
    });
    it("should render output appropriately", () => {
        const shape = new Circle();
        shape.setColor("blue");
        shape.setShapeColor("white");
        shape.setText("AMM");
        expect(shape.render()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="white" /> <text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">AMM</text> </svg>');
    });
  });
});
