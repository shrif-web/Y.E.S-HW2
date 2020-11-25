function onHomepage2Load() {
  var sidebar = document.getElementById("sidebar");
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
      "../resources/blue_logo_200x200_copy.png";
    document.getElementById("headerIconMobile").src =
      "../resources/blue_logo_200x200_copy.png";
    document.getElementById("dataTable").classList.remove("teal")
    document.getElementById("dataTable").classList.add("blue");
  } else {
    setTheme("theme-light");
    document.getElementById("headerIcon").src =
      "../resources/multi_logo_200x200_copy.png";
    document.getElementById("headerIconMobile").src =
      "../resources/multi_logo_200x200_copy.png";
    
    document.getElementById("dataTable").classList.remove("blue")
    document.getElementById("dataTable").classList.add("teal");
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
    document.getElementById("footerButtonHome").classList.add("active");

    document.getElementById("dataButton1").classList.remove("active");
    document.getElementById("footerButtonData").classList.remove("active");
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