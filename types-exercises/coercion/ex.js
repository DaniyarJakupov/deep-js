// TODO: write the validation functions
const isValidName = name => {
  // must be a string && must be non-empty &&
  // must contain non-whitespace  of at least 3 characters
  if (typeof name === "string" && name.trim().length >= 3) return true;
  return false;
};

const hoursAttended = (attended, len) => {
  // - both parameters should be treated as numbers
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  if (typeof len == "string" && len.trim() != "") {
    len = Number(len);
  }

  //  - either parameter may only be a string or number
  // - both numbers must be 0 or higher
  // - both numbers must be whole numbers
  //- `attended` must be less than or equal to `length`
  if (
    typeof attended == "number" &&
    typeof len == "number" &&
    attended <= len &&
    attended >= 0 &&
    len >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(len)
  ) {
    return true;
  }

  return false;
};

// tests:
console.log("string", isValidName("Frank") === true);
console.log("boolean: ", isValidName(false) === false);
console.log("null: ", isValidName(null) === false);
console.log("undefined: ", isValidName(undefined) === false);
console.log("empty str: ", isValidName("") === false);
console.log("whitespace str: ", isValidName("  \t\n") === false);
console.log("one char: ", isValidName("X") === false);

console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
