// Airport has a default capacity, and a storage array for planes
// (the apron):
function Airport(capacity) {
  const DEFAULTCAPACITY = 10;
  this.apron = [];

  if (typeof(capacity) == "undefined") {
    this.capacity = DEFAULTCAPACITY;
  } else if (typeof(capacity) != "number") {
    throw "Capacity not a number";
  } else {
    this.capacity = capacity;
  }

// Land Plane takes a plane and weather instance as arguments.
// If the weather is stormy it raises an error and refuses landing.
// If the airport is full it raises an error and refuses landing.
// Otherwise, it instructs the plane to land, then adds the plane
// to the apron.



// Take-off Plane takes a plane and weather instances as arguments.
// If the weather is stormy it raises an error and refuses take-off.
// If plane is not in airport, it raises an error and refuses take-off.
// Otherwise, it instructs the plane to take-off, then removes the
// plane from the apron.

}
