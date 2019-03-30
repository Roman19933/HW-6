function filterNumbers(arr, maxNumber) {
let array = arr;
let max = maxNumber;
let filterNumber = array.filter(function(value){
	return value < max;
});
 console.log(filterNumber);
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]