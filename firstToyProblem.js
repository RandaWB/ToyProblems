/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

console.log (minimum);
function minimum(array) {
  array=[1,10,5,-3,100];
   min= array[0];
  for (var i=0; i<array.length; i++){
    if (array[i]< min)
    min= array[i];
  }
  return array[i];
}
