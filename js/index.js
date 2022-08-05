let section = document.getElementsByTagName("section")
let loader_ctn = document.getElementById("loader_ctn")

for(let i=0; i<section.length; i++) {
  section[i].style.display = 'none'
}
window.addEventListener("load", () => {
  for(let i=0; i<section.length; i++) {
    section[i].style.display = 'block'
  }
  loader_ctn.style.display = 'none'
})