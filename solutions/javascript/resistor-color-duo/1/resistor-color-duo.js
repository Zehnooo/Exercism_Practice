//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const decodedValue = (colors) => {
    const resistorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }
  let totalResValue = "";
  
let i = 0; 

  for (let color of colors) {
    if (i >= 2) {break;}
    const value = resistorValues[color]
    totalResValue += value;
    ++i;
  }
 return Number(totalResValue);
};