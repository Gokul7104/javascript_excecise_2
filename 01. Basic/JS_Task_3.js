// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
function sumOrTriple(a, b) {
    if (a === b) {
      return 3 * (a + b);
    } else {
      return a + b;
    }
  }
  
  // test the function
  console.log(sumOrTriple(2, 3)); // outputs 5
  console.log(sumOrTriple(4, 4)); // outputs 24
/* --------------------------------------------------------------------------------- */