function MenuOpenBtn() {
    let dimad=document.getElementById("ham-menu")
    dimad.classList.remove("close");
}

function MenuCloseBtn() {
    let dimad=document.getElementById("ham-menu")
    dimad.classList.add("close");
}

const links = document.querySelectorAll(".links a")

for (let i=0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        let dimad=document.getElementById("ham-menu")
        dimad.classList.add("close");
    })
}

const header = document.querySelector(".header")
window.addEventListener("scroll", function () {
    let scrolled = scrollY;
    console.log(scrolled)
    if (scrolled > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})




const token = '7733654228:AAHU5TBGdOH3jq7mXpfkexk0AWdt4BFqfXk';
let offset = 0;
const content_div = document.getElementById("content");
function getUpdates() {
  fetch(`https://api.telegram.org/bot${token}/getUpdates?offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      if (data.result.length > 0) {
        data.result.forEach(update => {
          offset = update.update_id + 1;
          globalThis
          console.log(data)
          let text = ("text : "+data["result"][0]["message"]["text"])
          let first_name = ("first name : "+data["result"][0]["message"]["chat"]["first_name"])
        //   let chat_id = ("chat id : "+data["result"][0]["message"]["chat"]["id"])
          console.log(`text : ${text}
first name : ${first_name}
chat id : ${chat_id}`)


          
          const new_para = document.createElement("p");
          new_para.classList.add("left")
          new_para.classList.add("white")
          new_para.textContent = text;
          content_div.appendChild(new_para);
          localStorage.setItem("content", content_div.innerHTML);


          
        });
      }
      setTimeout(getUpdates, 1000);
    })
}

window.onload = function() {
  const content_div = document.getElementById("content");
  const savedcontnt = localStorage.getItem("content");
  if (savedcontnt) {
    content_div.innerHTML = savedcontnt
  }
}

function send() {
    const txt = document.querySelector(".search-2")[0];
    const name = document.querySelector(".search")[0];
    fetch(`https://api.telegram.org/bot${token}/SendMessage?chat_id=1002342240862&text=ss: ${txt}`)
    .then(response => response.json())
          
        const new_para = document.createElement("p");
        // new_para.href
        new_para.classList.add("left")
        new_para.classList.add("white")
        new_para.textContent = text;
        content_div.appendChild(new_para);
        localStorage.setItem("content", content_div.innerHTML);

};
    


window.onload = function() {
  const content_div = document.getElementById("content");
  const savedcontnt = localStorage.getItem("content");
  if (savedcontnt) {
    content_div.innerHTML = savedcontnt
  }
}


getUpdates();