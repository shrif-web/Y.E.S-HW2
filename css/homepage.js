function onButtonClick() {
  console.log("on button clicked!");
  console.log(document.getElementById("enterButton"));
  if (document.getElementById("enterButton").classList.contains("inverted")) {
    document.getElementById("enterButton").classList.remove("inverted");
  } else {
    document.getElementById("enterButton").classList.add("inverted");
  }
}

function onLoad() {
    document.getElementById("slider").checked = false
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
    console.log("here")
  slider = document.getElementById("slider");

  if (slider.checked) {
    setTheme("theme-dark");
    document.getElementById("headerButton1").classList.add("inverted");
    document.getElementById("headerButton2").classList.add("inverted");
    document.getElementById("headerIcon").src =
      "../files/multi_logo_200x200_copy.png";
  } else {
    setTheme("theme-light");
    document.getElementById("headerButton1").classList.remove("inverted");
    document.getElementById("headerButton2").classList.remove("inverted");
    document.getElementById("headerIcon").src =
      "../files/blue_logo_200x200_copy.png";
  }
}
