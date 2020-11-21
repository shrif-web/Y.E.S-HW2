function onButtonClick() {
    console.log("on button clicked!");
    console.log(document.getElementById("enterButton"));
    if (
      document.getElementById("enterButton").classList.contains("inverted")
    ) {
      document.getElementById("enterButton").classList.remove("inverted");
    } else {
      document.getElementById("enterButton").classList.add("inverted");
    }
  }

  function toggleTheme() {
      console.log("in toggling theme!")
  }

