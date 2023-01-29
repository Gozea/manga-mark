// background-script.js

//communication with script.js
let portFromCS;
var i = 0;

function connected(p) {
  portFromCS = p;
  portFromCS.onMessage.addListener((m) => {
    console.log("received msg")
    var chap = m.chapter
    console.log(chap)
    browser.storage.local.set({i: chap});
    i += 1
  });
}

browser.runtime.onConnect.addListener(connected);

