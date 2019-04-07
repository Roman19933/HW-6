function average(arr) {
let total = 0;
for (var i = 0; i < arr.length; i++) {
	total+=arr[i];
	
}
let result = (total/arr.length).toFixed(2);
	return result;
}
average([1,4,2]) // 2.33