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

function onDataClick() {
  document.getElementById("homeContent").style.display = 'none';
  document.getElementById("dataContent").style.display = 'block';

  document.getElementById("homeButton1").classList.remove("active")
  document.getElementById("homeButton2").classList.remove("active")

  document.getElementById("dataButton1").classList.add("active")
  document.getElementById("dataButton2").classList.add("active")
  

}

function onHomeClick() {
  document.getElementById("dataContent").style.display = 'none';
  document.getElementById("homeContent").style.display = 'block';

  document.getElementById("homeButton1").classList.add("active")
  document.getElementById("homeButton2").classList.add("active")

  document.getElementById("dataButton1").classList.remove("active")
  document.getElementById("dataButton2").classList.remove("active")
}
