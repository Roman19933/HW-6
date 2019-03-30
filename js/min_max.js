function minMax(arr) {
 let max = Math.max(...arr);
 let min = Math.min(...arr);
 return {
 	max: max,
 	min: min
 }
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }