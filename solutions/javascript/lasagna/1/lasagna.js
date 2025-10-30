// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

// EXPECTED COOK TIME
export const EXPECTED_MINUTES_IN_OVEN = 40;


/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {

  let TIME_COOKED = actualMinutesInOven;

  let TIME_REMAINING = EXPECTED_MINUTES_IN_OVEN - TIME_COOKED;

  return TIME_REMAINING;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  
  let TOTAL_LAYER_PREP_TIME = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;

  return TOTAL_LAYER_PREP_TIME;

}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {

let TIME_COOKED = actualMinutesInOven;
let LAYERS = numberOfLayers;

let TOTAL_TIME_SPENT = (TIME_COOKED + (LAYERS * PREPARATION_MINUTES_PER_LAYER));

return TOTAL_TIME_SPENT;
   
}