arr = document.getElementById("arrow");
sidebar = document.getElementById("sidebar");
option = document.getElementsByClassName("option");
inArr = document.getElementById("in-arr");
outed = document.getElementsByClassName("outone");
function out() {
  console.log("otiut")
  sidebar.style.width = "20vw";
  Array.from(option).forEach((element) => {
    element.style.visibility = "visible";
  })
  arr.innerHTML = "&#8656;";
  arr.classList.add("outone");
  outed = document.getElementsByClassName("outone");
  console.log(outed[0]);
  outed[0].addEventListener("click", innn);
}
function innn() {
  console.log("innn")
  Array.from(option).forEach((element) => {
    element.style.visibility = "hidden";
  })
  sidebar.style.width = "5vw";
  arr.innerHTML = "&#8658;";
  outed[0].removeEventListener("click", innn);
  arr.classList.remove("outone");
}
