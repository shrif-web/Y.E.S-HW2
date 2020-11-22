function onMainHomeLoad() {
  console.log("silaaaaam to the main homepage");

}

function onLoadPC() {

  console.log("onLoadPC", window.innerWidth, window.innerHeight)
  if (window.screen.width < 600) {
    window.location = "mobile_homepage.html";
  }
  onLoad();
}

function onLoadMobile() {
  console.log("onLoadMobile", window.innerWidth, window.innerHeight)
  if (window.screen.width >= 600) {
    window.location = "pc_homepage.html";
  }
  onLoad();
}

function onLoad() {
  var theme = localStorage.getItem("theme");
  if (theme == 'theme-dark') {
    document.getElementById("slider").checked = true;
  } else {
    document.getElementById("slider").checked = false;
  }
  // document.getElementById("slider").checked = false;
  console.log("here", localStorage.getItem("theme"));
  setTheme(localStorage.getItem('theme'))
}

function onDataClick() {
  var curTheme = localStorage.getItem("theme");
  console.log("curTheme in Home:", curTheme);
  window.location.href = "../datas/data.html";
}

function setTheme(themeName) {
  console.log("in set theme", themeName);
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  slider = document.getElementById("slider");

  if (slider.checked) {
    setTheme("theme-dark");
    document.getElementById("headerButton1").classList.add("inverted");
    document.getElementById("headerButton2").classList.add("inverted");
    document.getElementById("headerIcon").src =
      "../resources/blue_logo_200x200.png";
  } else {
    setTheme("theme-light");
    document.getElementById("headerButton1").classList.remove("inverted");
    document.getElementById("headerButton2").classList.remove("inverted");
    document.getElementById("headerIcon").src =
      "../resources/multi_logo_200x200_copy.png";
  }
}
