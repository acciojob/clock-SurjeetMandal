//your JS code here. If required.
let displayTime = document.getElementById("timer");

setInterval(
	function() {
		let currentTime = new Date();
		displayTime.innerHTML = currentTime.toLocaleString();
	},1000
)