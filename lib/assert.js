var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
  },

  isEq: function(assertionToCheck, otherAssertion) {
    if(assertionToCheck !== otherAssertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " does not equal " + otherAssertion);
    }
  },

  isArray: function(assertionToCheck) {
    if(Object.prototype.toString.call(assertionToCheck) !== '[object Array]') {
      throw new Error("Assertion failed: " + assertionToCheck + " is not an Array");
    }
  },

  isObject: function(assertionToCheck) {
    if(Object.prototype.toString.call(assertionToCheck) !== '[object Object]') {
      throw new Error("Assertion failed: " + assertionToCheck + " is not an Object");
    }
  }

};
