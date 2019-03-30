function bombTimer(str, time) { 

	let times = setTimeout(function(){
		console.log(time);
	
		if(time===1){
			setTimeout(function(){console.log(str)},1000);
			// clearInterval(settingInterval);
		} else if(time>1){
			return bombTimer(str,time-1);
		}
	},1000);
	
 }


bombTimer('Boooom', 5);
