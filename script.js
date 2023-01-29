// content-script.js

console.log("yo")
//communication with script.js
let myPort = browser.runtime.connect({name:"port-from-cs"});

let url = window.location.href
console.log(url)



//we are in chapter list
var chapters = document.getElementsByClassName("chapter-link")
console.log("chapters")
console.log(chapters)
for (let c=0 ; c < chapters.length-1 ; c++) {
	console.log(chapters[c])
	chapters[c].addEventListener("click", () => {
		var title = chapters[c].title
		console.log("N° ")
		console.log(title)
		myPort.postMessage({chapter: title})
	})
}
