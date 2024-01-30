const { Triangle } = require("../lib/shapes.js");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should instantiate triangle class and set color", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.textColor).toBe("blue");
    });
    it("should render output appropriately", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setShapeColor("white");
        shape.setText("AMM");
        expect(shape.render()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="200,10 300,210 110,210" fill="white" /> <text x="200" y="150" font-size="50" text-anchor="middle" fill="blue">AMM</text> </svg>');
    });
  });
});