function printTimeout(str, n) { 
let string = str;
setTimeout(function(){
	console.log(string);
},n*1000);
	
}
printTimeout('hello', 1) // hello will appear after 10secs in console