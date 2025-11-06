//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0){ throw new Error ('Only positive integers are allowed')};
  let steps = 0;
  while (n !== 1){
    ++steps;
    n % 2 === 0 ? n = n / 2 : n = n * 3 + 1;
  }
  return steps;
};
