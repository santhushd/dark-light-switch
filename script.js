const btnLightMode = document.getElementById("btnLightMode");
const btnDarkMode = document.getElementById("btnDarkMode");
const divTopCloudLayer = document.getElementById("divTopCloudLayer");
const divBottomCloudLayer = document.getElementById("divBottomCloudLayer");
const divStarLayer = document.getElementById("divStarLayer");
const divSwitch = document.getElementById("divSwitch");
const divCircle1 = document.getElementById("divCircle1");
const divCircle2 = document.getElementById("divCircle2");
const divCircle3 = document.getElementById("divCircle3");

let lightmode = true;

function ToggleMode() {
  if (lightmode) {
    btnLightMode.style.left = "210px";
    btnLightMode.style.opacity = "0";
    btnDarkMode.style.left = "210px";
    btnDarkMode.style.opacity = "1";
    divTopCloudLayer.style.bottom = "-120px";
    divBottomCloudLayer.style.bottom = "-180px";
    divStarLayer.style.top = "5px";
    divSwitch.classList.remove("switch-light");
    divSwitch.classList.add("switch-dark");
    divCircle1.style.left = "210px";
    divCircle2.style.left = "210px";
    divCircle3.style.left = "210px";
    lightmode = false;
  } else {
    btnLightMode.style.left = "10px";
    btnLightMode.style.opacity = "1";
    btnDarkMode.style.left = "10px";
    btnDarkMode.style.opacity = "0";
    divTopCloudLayer.style.bottom = "0";
    divBottomCloudLayer.style.bottom = "0";
    divStarLayer.style.top = "100px";
    divSwitch.classList.add("switch-light");
    divSwitch.classList.remove("switch-dark");
    divCircle1.style.left = "0";
    divCircle2.style.left = "0";
    divCircle3.style.left = "0";
    lightmode = true;
  }
}
