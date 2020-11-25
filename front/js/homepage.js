function onMainHomeLoad() {
  console.log("silaaaaam to the main homepage");

}

function onLoadPC() {

  if (window.screen.width < 600) {
    window.location = "../homepage/mobile_homepage.html";
  }
  onLoad();
}

function onLoadMobile() {
  // console.log("onLoadMobile", window.innerWidth, window.innerHeight)
  if (window.screen.width >= 600) {
    window.location = "../homepage/pc_homepage.html";
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
  window.location.href = "../datas/data.html";
}

function setTheme(themeName) {
  console.log("in set theme", themeName);
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
  toggleTheme();
}

function toggleTheme() {
  slider = document.getElementById("slider");

  if (slider.checked) {
    document.getElementById("dataTable").classList.remove("teal")
      console.log("you are your mother");
    document.getElementById("dataTable").classList.add("blue");
      console.log("you are your mother");
    setTheme("theme-dark");
    document.getElementById("headerIcon").src =
      "../resources/blue_logo_200x200.png";
  }else {
    document.getElementById("dataTable").classList.remove("blue")
      console.log("you are your mother");
    document.getElementById("dataTable").classList.add("teal");
      console.log("you are your mother");  }
    setTheme("theme-light");
    document.getElementById("headerIcon").src =
      "../resources/multi_logo_200x200_copy.png";
}

