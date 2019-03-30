function bombTimer(str, time) { 
    let times = function(){
		console.log(time);
		time--;
		if(time<0){
			setTimeout(function(){console.log(str)},1000);
			clearInterval(settingInterval);
		}
	};
	let settingInterval = setInterval(times,1000);
}


bombTimer('Boooom', 3);
