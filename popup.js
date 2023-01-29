browser.storage.local.get().then(function (result) {
  let results = [];
 
  for (const key of Object.keys(result)) {
    results.push({ 'site': key, 'time': result[key]});
  }
 
 
  for (let i = 0; i < 5; i++) {
    let line = document.getElementById('item_' + (i+1));
    if (i < results.length) {
      line.getElementsByClassName('name')[0].textContent = results[i].site;
      line.getElementsByClassName('time')[0].textContent = results[i].time
    } else {
      line.style.display = 'none';
    }
  }
});
