// background-script.js

//communication with script.js
let portFromCS;
var i = 0;


function connected(p) {
  portFromCS = p;
  portFromCS.onMessage.addListener((m) => {
    console.log("received msg")
    var chap = m.chapter
    var link = m.link
    var icon = m.icon
    var title = m.title
    console.log(chap)
    console.log(link)
    var data =  {
		"link": link,
		"chapter": chap,
		"icon": icon,
		"title": title
	   } 
    browser.storage.local.set({[link]: data });
    i += 1
  });
}

browser.runtime.onConnect.addListener(connected);

browser.history.onTitleChanged.addListener(function(e) {
	console.log("sending ping")
	portFromCS.postMessage({ping: "history update"})
});
