browser.storage.local.get().then(function (result) {
  let results = [];
 
  for (const key of Object.keys(result)) {
    console.log(key)
    console.log(result[key])
    results.push({ 'link': result[key].link, 'chapter': result[key].chapter, 'icon': result[key].icon, 'title': result[key].title});
  }
 
 
  for (let i = 0; i < 5; i++) {
    let line = document.getElementById('item_' + (i+1));
    if (i < results.length) {
      line.getElementsByClassName('title')[0].textContent = results[i].title;
      line.getElementsByClassName('chapter')[0].textContent = results[i].chapter
      line.getElementsByClassName('chapter')[0].href = results[i].link
      line.getElementsByClassName('icon')[0].src = results[i].icon
    } else {
      line.style.display = 'none';
    }
  }
});

document.getElementById("mangamark").addEventListener("click", () => {
	let markpage = browser.tabs.create({
		url:"/page/page.html"
	})
})
