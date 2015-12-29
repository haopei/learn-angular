angular.module("services", [])
  .value("number", 6)
  // declare the service name, dependency and the Constructor object to be returned (Adder)
  // Adder takes a param 'number'
  .service("adder", ["number", Adder]);


// Constructor function
function Adder(number) {
  this.add = function(numToAddProvidedByController) {
    return number + numToAddProvidedByController;
  };
}
