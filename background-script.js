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
    console.log(chap)
    browser.storage.local.set({[link]: chap});
    i += 1
  });
}

browser.runtime.onConnect.addListener(connected);

browser.history.onTitleChanged.addListener(function(e) {
	console.log("sending ping")
	portFromCS.postMessage({ping: "history update"})
});
