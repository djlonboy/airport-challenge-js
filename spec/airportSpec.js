describe("Airport", function() {

  beforeEach(function() {
    airport = new Airport(5);
  });

  describe("when creating a new airport", function() {

    it("should have the capacity it was passed as an argument", function() {
      expect(airport.capacity).toEqual(5);
    });

    it("should have the default capacity if no argument is passed", function () {
      airport2 = new Airport();
      expect(airport2.capacity).toEqual(10);
    });

    it("should throw error if argument is not a number", function() {
      expect(function() {new Airport("test")}).toThrow("Capacity not a number");
    });
  });

  describe("when landing a plane", function() {

  //   it("should expect instances of plane and weather as arguments", function () {
  //
  //   });
  // });

});
