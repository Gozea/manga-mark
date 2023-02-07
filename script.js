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
			var title = $('.mb-1')[0].textContent
			console.log(title)
			var img = $('img')[4].src
			console.log(img)
			for (let c=0 ; c < chapters.length-1 ; c++) {
				console.log(chapters[c])
				chapters[c].addEventListener("click", () => {
					var chap = chapters[c].title
					var href = chapters[c].href
					console.log("N° ")
					console.log(title)
					myPort.postMessage({chapter: chap, link: href, icon: img, title: title})
				})
			}
		clearInterval(intervals);
		}
	}, 400);
});
