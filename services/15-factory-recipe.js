angular.module("services", [])
  .value("number", 6)
  // declare number value to be a dependency within square factory
  .factory("square", ["number", function(number) {
    return number * number;
  }]);
