function onLoad() {
  var theme = localStorage.getItem("theme");
  if (theme == "theme-dark") {
    document.getElementById("slider").checked = true;
  } else {
    document.getElementById("slider").checked = false;
  }
  // document.getElementById("slider").checked = false;
  // console.log("here", localStorage.getItem("theme"));
  setTheme(localStorage.getItem("theme"));
}

function onHomeClick() {
  window.location = "../homepage/homepage.html";
}

function onLoadPC() {
  if (window.screen.width < 600) {
    window.location = "../datas/mobile_data.html";
  }
  onLoad();
}

function onLoadMobile() {
  // console.log("onLoadMobile", window.innerWidth, window.innerHeight);
  if (window.screen.width >= 600) {
    window.location = "../datas/pc_data.html";
  }
  onLoad();
}

function onHomeClick() {
  var curTheme = localStorage.getItem("theme");
  window.location.href = "../homepage/pc_homepage.html";
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  console.log("here");
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
