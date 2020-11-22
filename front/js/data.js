function onButtonClick() {
  console.log("on button clicked!");
  // location.href = "../data.html";
}

function onLoad() {
  // var theme = parent.document.URL.substring(
  //   parent.document.URL.indexOf("=") + 1,
  //   parent.document.URL.length
  // );
  // console.log("themeeeeee:", theme);
  // setTheme(theme);
  //   document.getElementById("slider").checked = false

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
      "../../resources/blue_logo_200x200_copy.png";
  } else {
    setTheme("theme-light");
    document.getElementById("headerButton1").classList.remove("inverted");
    document.getElementById("headerButton2").classList.remove("inverted");
    document.getElementById("headerIcon").src =
      "../../resources/multi_logo_200x200_copy.png";
  }
}
