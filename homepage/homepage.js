function onButtonClick() {
  console.log("on button clicked!");
  console.log(document.getElementById("enterButton"));
  if (document.getElementById("enterButton").classList.contains("inverted")) {
    document.getElementById("enterButton").classList.remove("inverted");
  } else {
    document.getElementById("enterButton").classList.add("inverted");
  }
}

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

function toggleTheme() {
  console.log("in toggling theme!");
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    document.getElementById("headerIcon").src =
      "../files/blue_logo_200x200_copy.png";
  } else {
    setTheme("theme-dark");
    document.getElementById("headerIcon").src =
      "../files/multi_logo_200x200_copy.png";
  }
}
