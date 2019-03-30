function concatFirstNestedArrays(arr) { 

let res = arr.reduce(function(value,elem) {
	return value.concat(elem);
})
console.log(res);
}
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]