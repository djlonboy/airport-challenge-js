describe("Plane", function() {

  beforeEach(function() {
    plane = new Plane(1);
  });

  it("new instance returns an error if ID is not a number", function() {
    expect(function(){ new Plane("test") }).toThrow("Wrong ID type");
  });

  it("new instance returns an error if no ID is passed", function() {
    expect(function(){ new Plane() }).toThrow("No ID passed");
  });

  it("can return its ID", function() {
    expect(plane.id).toEqual(1);
  });

  it("can return its type", function() {
    expect(plane.typeOf()).toEqual("plane");
  })

  it("is initialised as landed", function() {
    expect(plane.inAir).toBeFalse();
  });

  it("is in air if it's taken off", function() {
    plane.takeOff();
    expect(plane.inAir).toBeTrue();
  });

  it("cannot take off if it's already in the air", function() {
    plane.takeOff();
    expect(function(){ plane.takeOff() }).toThrow("Plane already in the air");
  });

  it("can land if it's in the air", function() {
    plane.takeOff();
    expect(function(){ plane.land() }).not.toThrow();
  });

  it("is on the ground if it's landed", function() {
    plane.takeOff();
    plane.land();
    expect(plane.inAir).toBeFalse();
  });

  it("cannot land if it's already landed", function() {
    expect(function(){ plane.land() }).toThrow("Plane has already landed");
  });

});
