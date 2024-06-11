function toggle() {
  document.getElementById("mobilemenu").style.display = "block";
}
function toggleout() {
  document.getElementById("mobilemenu").style.display = "none";
}

// ---scroll-to-top icon use js code----//

function gototop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

// ---current date & year set js code----//

let date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerText = year;
