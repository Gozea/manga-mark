browser.storage.local.get().then(function (result) {
  let results = [];
 
  for (const key of Object.keys(result)) {
    console.log(key)
    console.log(result[key])
    results.push({ 'link': result[key].link, 'chapter': result[key].chapter, 'icon': result[key].icon, 'title': result[key].title});
  }
 

let lister = document.getElementById("sites"); 
  for (let i = 0; i < results.length; i++) {
    //div
    let line = document.createElement("div");
    let id = "item_" + i;
    line.setAttribute("id", id)
    line.setAttribute("class", "item")
    //image
    let img = document.createElement("img")
    img.setAttribute("class", "icon")
    img.setAttribute("src", results[i].icon)
    img.setAttribute("alt", "manga image")
    img.setAttribute("style", "height: 100%; width: 100%; object-fit: contain")
    //title
    let p = document.createElement("p")
    p.setAttribute("class", "title")
    p.textContent = results[i].title
    //chapter link
    let a = document.createElement("a")
    a.setAttribute("class", "chapter")
    a.src = results[i].link
    a.textContent = results[i].chapter
    //glue everything together
    line.appendChild(img)
    line.appendChild(p)
    line.appendChild(a)
    lister.appendChild(line)
  }
});

console.log(results)
