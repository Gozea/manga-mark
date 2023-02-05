// content-script.js

console.log("yo")
//communication with script.js
let myPort = browser.runtime.connect({name:"port-from-cs"});

myPort.onMessage.addListener((m) => {
	console.log("im on")
	let url = window.location.href
	console.log(url)
	var intervals = setInterval(function() {
		var chapters = $('.chapter-link')
		console.log(chapters)
		//we are in chapter list
		if (chapters.length > 0) {
			for (let c=0 ; c < chapters.length-1 ; c++) {
				console.log(chapters[c])
				chapters[c].addEventListener("click", () => {
					var title = chapters[c].title
					var href = chapters[c].href
					console.log("N° ")
					console.log(title)
					myPort.postMessage({chapter: title, link: href})
				})
			}
		clearInterval(intervals);
		}
	}, 400);
});
