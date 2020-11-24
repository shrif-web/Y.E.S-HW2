function onHomepage2Load() {
  // console.log("rightbar:", document.getElementById("rightBar"));
  // console.log("sidebar:", document.getElementById("sidebar"));
  var sidebar = document.getElementById("sidebar");
  // var menu = document.getElementById("rightBar");

  if (window.screen.width < 600) {
    if (sidebar.classList.contains("visible")) {
      sidebar.classList.remove("visible");
    }
    if (sidebar.classList.contains("right")) {
      sidebar.classList.remove("right")
    }
  } else {
    if (!sidebar.classList.contains("visible")) {
      sidebar.classList.add("visible");
    }
    if (!sidebar.classList.contains("right")) {
      sidebar.classList.add("right")
    }
  }
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
    // document.getElementById("headerButton1").classList.add("inverted");
    // document.getElementById("headerButton2").classList.add("inverted");
    document.getElementById("headerIcon").src =
      "../resources/blue_logo_200x200.png";
  } else {
    setTheme("theme-light");
    // document.getElementById("headerButton1").classList.remove("inverted");
    // document.getElementById("headerButton2").classList.remove("inverted");
    document.getElementById("headerIcon").src =
      "../resources/multi_logo_200x200_copy.png";
  }
}
