//your JS code here. If required.
function daysOfAYear(year) {
  if (year % 4 !== 0) {
    // Not a leap year
    return 365;
  } else if (year % 100 !== 0) {
    // Leap year (not a century year)
    return 366;
  } else if (year % 400 !== 0) {
    // Century year, not a leap year
    return 365;
  } else {
    // Century year and a leap year
    return 366;
  }
}

// Examples
console.log(daysOfAYear(2022)); // Output: 365
console.log(daysOfAYear(2024)); // Output: 366
console.log(daysOfAYear(1900)); // Output: 365
console.log(daysOfAYear(2000)); // Output: 366
