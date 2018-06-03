import axios from "axios";
const postAPI = axios.create({
  baseURL: process.env.API_URL
});

const templates = {
  aboutItems: document.querySelector("#about__items").content,
}

function render (fragment){
  rootEl.textContent = '';
  rootEl.appendChild(frag);
}

function about () {
  const fragment = document.importNode(templates.aboutItems, true)
  document.querySelector(".about").addEventListener("click", e=>{
    console.log("about")
    document.querySelector("#about__items").appendChild(fragment)
  })
}

function works(){
  const fragment = document.importNode(templates.aboutItems, true)
  document.querySelector(".works").addEventListener("click", e => {
    console.log("works")
    let child = document.querySelector(".about__items");
    child.removeChild(fragment)
  })
}

  about();
  works();