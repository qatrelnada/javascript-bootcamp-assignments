let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");

    let mainData = JSON.parse(this.responseText);

    for (let i = 0; i < mainData.length; i++) {
      mainData[i].section = "All";
    }
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    for (let i = 0; i < mainData.length; i++) {
      let mainDiv = document.createElement('div');
      mainDiv.id = "data";
      let div = document.createElement('div');
      let h2 = document.createElement('h2');
      let title = document.createTextNode(mainData[i].title);
      let p1 = document.createElement('p');
      let content = document.createTextNode(mainData[i].content);
      let p2 = document.createElement('p');
      let author = document.createTextNode(`Author: ${mainData[i].author}`);
      let p3 = document.createElement('p');
      let section = document.createTextNode(`Category: ${mainData[i].section}`);
      
      h2.appendChild(title);
      p1.appendChild(content);
      p2.appendChild(author);
      p3.appendChild(section);
      div.appendChild(h2);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      mainDiv.appendChild(div);
      document.body.appendChild(mainDiv);  
    }
  }
};
