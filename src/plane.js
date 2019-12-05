function Plane(id) {
  if (typeof(id) == "undefined") {
    throw "No ID passed"
  } else if (typeof(id) != "number") { throw "Wrong ID type" };
  this.id = id;
  this.inAir = false;

  Plane.prototype.takeOff = function() {
    if (this.inAir == true) { throw "Plane already in the air" };
    this.inAir = true;
  };

  Plane.prototype.land = function() {
    if (this.inAir == false) { throw "Plane has already landed" };
    this.inAir = false;
  };

};
