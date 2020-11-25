function onHomepage2Load() {
  // console.log("rightbar:", document.getElementById("rightBar"));
  // console.log("sidebar:", document.getElementById("sidebar"));
  var sidebar = document.getElementById("sidebar");
  // var menu = document.getElementById("rightBar");

  // if (window.screen.width < 600) {
  //   if (sidebar.classList.contains("visible")) {
  //     sidebar.classList.remove("visible");
  //   }
  //   if (sidebar.classList.contains("right")) {
  //     sidebar.classList.remove("right");
  //   }
  // } else {
  //   if (!sidebar.classList.contains("visible")) {
  //     sidebar.classList.add("visible");
  //   }
  //   if (!sidebar.classList.contains("right")) {
  //     sidebar.classList.add("right");
  //   }
  // }
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
    document.getElementById("headerIcon").src =
      "../resources/blue_logo_200x200.png";
  } else {
    setTheme("theme-light");
    document.getElementById("headerIcon").src =
      "../resources/multi_logo_200x200_copy.png";
  }
}

// tab switching handler
var homePageCurrentTab = 'home';

function onDataClick() {
  if (homePageCurrentTab != 'data') {
    hSlide(document.getElementById("homeContent"), 0, 1200, 30, 1);
    hSlide(document.getElementById("dataContent"), 0, 1200, 30, 1);

    document.getElementById("homeButton1").classList.remove("active");
    // document.getElementById("homeButton2").classList.remove("active");

    document.getElementById("dataButton1").classList.add("active");
    // document.getElementById("dataButton2").classList.add("active");
    homePageCurrentTab = 'data';
  }
}

function onHomeClick() {
  if (homePageCurrentTab != 'home') {
    hSlide(document.getElementById("dataContent"), 1200, 0, 30, 1);
    hSlide(document.getElementById("homeContent"), 1200, 0, 30, 1);

    document.getElementById("homeButton1").classList.add("active");
    // document.getElementById("homeButton2").classList.add("active");

    document.getElementById("dataButton1").classList.remove("active");
    // document.getElementById("dataButton2").classList.remove("active");
    homePageCurrentTab = 'home';
  }
}

function hSlide(element, x0, x1, step, fps) {
  var left = x0;
  var dir = (x0 < x1) ? "ltr" : "rtl";
  var timer = setInterval(function () {
    left = (dir == "ltr") ? left + step : left - step;
    element.style.left = left + 'px'
    if ((dir == "ltr" && left >= x1) || (dir == "rtl" && left <= x1)) {
      clearInterval(timer);
    }
  }, fps);
}