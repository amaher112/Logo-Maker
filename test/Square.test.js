const { Square } = require("../lib/shapes.js");

describe("Shape", () => {
  describe("Square", () => {
    it("should instantiate square class and set color", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.textColor).toBe("blue");
    });
    it("should render output appropriately", () => {
        const shape = new Square();
        shape.setColor("blue");
        shape.setShapeColor("white");
        shape.setText("AMM");
        expect(shape.render()).toBe('<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="white" /> <text x="100" y="125" font-size="60" text-anchor="middle" fill="blue">AMM</text> </svg>');
    });
  });
});
