function onHomepage2Load() {
  loginLoadFunc();
  loginResizeFunc();
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

    //for login
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    theme = 0;
    loadiconimg();
  } else {
    setTheme("theme-light");
    document.getElementById("headerIcon").src =
      "../resources/multi_logo_200x200_copy.png";
    document.getElementById("headerIconMobile").src =
      "../resources/multi_logo_200x200_copy.png";

    document.getElementById("dataTable").classList.remove("blue")
    document.getElementById("dataTable").classList.add("teal");

    //for login
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    theme = 1;
    loadiconimg();
  }
}

// tab switching handler
var homePageCurrentTab = 'home';

function onDataClick() {
  if (homePageCurrentTab != 'data') {
    hLSlide(document.getElementById("homeContent"), 0, 1200, 30, 1);
    hLSlide(document.getElementById("dataContent"), 0, 1200, 30, 1);

    document.getElementById("homeButton1").classList.remove("active");
    // document.getElementById("homeButton2").classList.remove("active");

    document.getElementById("dataButton1").classList.add("active");
    // document.getElementById("dataButton2").classList.add("active");
    homePageCurrentTab = 'data';
  }
}

function onHomeClick() {
  if (homePageCurrentTab != 'home') {
    hLSlide(document.getElementById("dataContent"), 1200, 0, 30, 1);
    hLSlide(document.getElementById("homeContent"), 1200, 0, 30, 1);

    document.getElementById("homeButton1").classList.add("active");
    // document.getElementById("homeButton2").classList.add("active");

    document.getElementById("dataButton1").classList.remove("active");
    // document.getElementById("dataButton2").classList.remove("active");
    homePageCurrentTab = 'home';
  }
}

function hLSlide(element, x0, x1, step, fps) {
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

// for login page
const bluelogosrc = "../resources/blue_logo.png";
const blacklogosrc = "../resources/black_logo.png";
const multilogosrc = "../resources/multi_logo.png";
const signinsrc = "../resources/signinpic.gif";
const signupsrc = "../resources/signuppic.jpg";
const errlightsrc = "../resources/errpiclight.jpg";
const errdarksrc = "../resources/errpicdark.jpg";

function loginLoadFunc() {
  loginResizeFunc();
  document.getElementById("lpicframe").src = signinsrc;
  loginLoadtheme(1);
}

function loginThemeToggle() {
  document.getElementById('slider').checked = (theme == 1) ? true : false;
  toggleTheme();
}

var theme = 1;
function loginLoadtheme(themeid) {
  if (themeid != theme) {
    loginThemeToggle();
  }
  loadiconimg();
}

function loadiconimg() {
  img = document.getElementById("llogoimageid");
  if (theme == 1) {
    img.src = bluelogosrc;
  } else if (theme == 0) {
    img.src = blacklogosrc;
  }
}

function hovericon() {
  document.getElementById("llogoimageid").src = multilogosrc;
}

function unhovericon() {
  document.getElementById("llogoimageid").src = (theme == 1) ? bluelogosrc : blacklogosrc;
}

function loginResizeFunc() {
  if (window.screen.width <= 600 || window.innerWidth <= 600) {
    document.getElementById("lpicframe").style.display = "none";
    document.getElementById("lraisedsegment").style.width = "332px";
    document.getElementById("lbodycontainer").style.height = (window.screen.height + parseInt(document.getElementById("lraisedsegment").style.marginTop) + parseInt(document.getElementById("lraisedsegment").style.height)) + "px";
  } else {
    document.getElementById("lpicframe").style.display = "block";
    document.getElementById("lraisedsegment").style.width = "1000px";
    document.getElementById("lbodycontainer").style.height = (window.screen.height + parseInt(document.getElementById("lraisedsegment").style.marginTop) + parseInt(document.getElementById("lraisedsegment").style.height)) + "px";
  }
}

var tabNum = 0;
//Issue: mouse hover style gone 
function changetab(mode) {
  var siform = document.getElementById("lsignInForm");
  var suform = document.getElementById("lsignUpForm");
  var sibtab = document.getElementById("lsibtn");
  var subtab = document.getElementById("lsubtn");
  var picFrame = document.getElementById("lpicframe");
  if (mode == 'si' && tabNum == 1) {
    hSlide(siform, -315, 15, 30, 1);
    hSlide(suform, 15, 345, 30, 1);
    sibtab.setAttribute('style', "  background-color: var(--login-tab_button_active); color: var(--login-tab_button_active_font);");
    subtab.setAttribute('style', "  background-color: var(--login-tab_button); color: var(--login-tab_button_font);");
    picFrame.src = signinsrc;
    tabNum = 0;
  } else if (mode == 'su' && tabNum == 0) {
    hSlide(siform, 15, -315, 30, 1);
    hSlide(suform, 345, 15, 30, 1);
    subtab.setAttribute('style', "  background-color: var(--login-tab_button_active); color: var(--login-tab_button_active_font);");
    sibtab.setAttribute('style', "  background-color: var(--login-tab_button); color: var(--login-tab_button_font);");
    picFrame.src = signupsrc;
    tabNum = 1;
  }
}

function closeErrMsg(msg, element, rh) {
  fade(document.getElementById(msg), function () {
    document.getElementById(element).style.marginTop = rh;
  });

}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function signInFormValidation() {
  container = document.getElementById("lraisedsegment");
  cssVars = getComputedStyle(document.documentElement);
  form = document.getElementById("lsignInForm");
  mail_input = document.getElementById("lsiemail");
  pass_input = document.getElementById("lsipass");
  err_message = document.getElementById("lsierrmsg");
  err_list = document.getElementById("lsierrlist");
  mail_field = document.getElementById("lsim");
  pass_field = document.getElementById("lsip");
  picFrame = document.getElementById("lpicframe");
  mail = document.getElementById("lsiemail").getElementsByTagName("*")[0].value;
  pass = document.getElementById("lsipass").getElementsByTagName("*")[0].value;
  pass = document.getElementById("lsipass").getElementsByTagName("*")[0].value;
  form.style.marginTop = "150px";
  formStepDecrease = 15;
  mail_input.className = "field";
  pass_input.className = "field";
  mail_field.style.borderColor = cssVars.getPropertyValue('--login-field');
  pass_field.style.borderColor = cssVars.getPropertyValue('--login-field');
  picFrame.src = signinsrc;
  err_message.style.display = "none";
  err_list.innerHTML = "";
  err = false;

  if (mail == "") {
    err = true;
    form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
    mail_input.className = "field error";
    mail_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
    err_list.innerHTML += "<li>ایمیلی درج نشده است.</li>";
  }
  else
    if (!validateEmail(mail)) {
      err = true;
      form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
      mail_input.className = "field error";
      mail_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
      err_list.innerHTML += "<li>ایمیل وارد شده نامعتبر است.</li>";
    }

  if (pass == "") {
    err = true;
    form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
    pass_input.className = "field error";
    pass_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
    err_list.innerHTML += "<li>رمز عبوری درج نشده است.</li>";
  }

  if (err) {
    unfade(err_message);
    shake(container, 20, 15, 0, 0);
    picFrame.src = (theme == 1) ? errlightsrc : errdarksrc;
  }

}

function signUpFormValidation() {
  container = document.getElementById("lraisedsegment");
  cssVars = getComputedStyle(document.documentElement);
  form = document.getElementById("lsignUpForm");
  mail_input = document.getElementById("lsuemail");
  pass_input = document.getElementById("lsupass");
  repass_input = document.getElementById("lsurepass");
  checkbox_input = document.getElementById("lsuchbox");
  err_message = document.getElementById("lsuerrmsg");
  err_list = document.getElementById("lsuerrlist");
  mail_field = document.getElementById("lsum");
  pass_field = document.getElementById("lsup");
  repass_field = document.getElementById("lsurp");
  checkbox_lable = document.getElementById("lchl");
  picFrame = document.getElementById("lpicframe");
  mail = document.getElementById("lsuemail").getElementsByTagName("*")[0].value;
  pass = document.getElementById("lsupass").getElementsByTagName("*")[0].value;
  repass = document.getElementById("lsurepass").getElementsByTagName("*")[0].value;
  checkbox = document.getElementById("lchbox")
  form.style.marginTop = "110px";
  formStepDecrease = 13;
  mail_input.className = "field";
  pass_input.className = "field";
  repass_input.className = "field";
  checkbox_input.className = "field";
  mail_field.style.borderColor = cssVars.getPropertyValue('--login-field');
  pass_field.style.borderColor = cssVars.getPropertyValue('--login-field');
  repass_field.style.borderColor = cssVars.getPropertyValue('--login-field');
  checkbox_lable.style.color = cssVars.getPropertyValue('--login-field');
  picFrame.src = signupsrc;
  err_message.style.display = "none";
  err_list.innerHTML = "";
  err = false;

  if (mail == "") {
    err = true;
    form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
    mail_input.className = "field error";
    mail_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
    err_list.innerHTML += "<li>ایمیلی درج نشده است.</li>";
  }
  else
    if (!validateEmail(mail)) {
      err = true;
      form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
      mail_input.className = "field error";
      mail_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
      err_list.innerHTML += "<li>ایمیل وارد شده نامعتبر است.</li>";
    }

  if (pass == "") {
    err = true;
    form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
    pass_input.className = "field error";
    pass_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
    err_list.innerHTML += "<li>رمز عبوری درج نشده است.</li>";
  } else
    if (pass != "" && repass == "") {
      err = true;
      form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
      repass_input.className = "field error";
      repass_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
      err_list.innerHTML += "<li>رمز عبور وارد شده تکرار نشده است.</li>";
    } else
      if (pass != repass) {
        err = true;
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        repass_input.className = "field error";
        pass_input.className = "field error";
        pass_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
        repass_field.style.borderColor = cssVars.getPropertyValue('--login-err_box_font');
        err_list.innerHTML += "<li>رمز های عبور با یکدیگر مطابقت نمیکنند.</li>";
      }

  if (!checkbox.checked) {
    err = true;
    form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
    checkbox_input.className = "field error";
    checkbox_lable.style.color = cssVars.getPropertyValue('--login-err_box_font');
    err_list.innerHTML += "<li>قوانین و شرایط باید پذیرفته شوند.</li>";
  }

  if (err) {
    unfade(err_message);
    shake(container, 20, 15, 0, 0);
    picFrame.src = (theme == 1) ? errlightsrc : errdarksrc;
  }

}

function loginPageHide() {
  container = document.getElementById("lbodycontainer");
  vslide(container, -100, -1000, 10, 1);
  fade(container);
}

function loginPageShowUp() {
  container = document.getElementById("lbodycontainer");
  vslide(container, -300, -100, 10, 1);
  unfade(container);
}

function loadSigninPage(mode) {
  changetab(mode);
  loginResizeFunc();
  loginPageShowUp();
}

//animation functions

function fade(element) {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.2;
  }, 15);
}

function unfade(element) {
  var op = 0.1;
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.2;
  }, 15);
}

function hSlide(element, x0, x1, step, fps) {
  var left = x0;
  var dir = (x0 < x1) ? "ltr" : "rtl";
  var timer = setInterval(function () {
    left = (dir == "ltr") ? left + step : left - step;
    element.style.marginLeft = left + 'px'
    if ((dir == "ltr" && left >= x1) || (dir == "rtl" && left <= x1)) {
      clearInterval(timer);
    }
  }, fps);
}


function vslide(element, y0, y1, step, fps) {
  var up = y0;
  var dir = (y0 < y1) ? "utd" : "dtu";
  var timer = setInterval(function () {
    up = (dir == "utd") ? up + step : up - step;
    element.style.marginTop = up + 'px'
    if ((dir == "utd" && up >= y1) || (dir == "dtu" && up <= y1)) {
      clearInterval(timer);
    }
  }, fps);
}

function transition(element, x0, y0, x1, y1, xstep, ystep, fps) {
  xstep = (xstep * (x1 - x0) < 0) ? xstep * -1 : xstep;
  ystep = (ystep * (y1 - y0) < 0) ? ystep * -1 : ystep;
  var timer = setInterval(function () {
    element.style.left = x0 + 'px';
    element.style.top = y0 + 'px';
    if ((xstep > 0 && ystep > 0 && x0 >= x1 && y0 >= y1) ||
      (xstep > 0 && ystep < 0 && x0 >= x1 && y0 <= y1) ||
      (xstep < 0 && ystep > 0 && x0 <= x1 && y0 >= y1) ||
      (xstep < 0 && ystep < 0 && x0 <= x1 && y0 <= y1)) {
      clearInterval(timer);
      return;
    }
    x0 += ((xstep > 0 && x0 < x1) || (xstep < 0 && x0 > x1)) ? xstep : 0;
    y0 += ((ystep > 0 && y0 < y1) || (ystep < 0 && y0 > y1)) ? ystep : 0;
  }, fps);
}

//Issue: bug which goes out of coordinates 
function shake(element, shakeCount, domain, marginLeft, marginTop) {
  x0 = marginLeft;
  y0 = marginTop;
  while (shakeCount > 0) {
    x1 = x0 + Math.floor(Math.random() * domain * 2) - domain + 1;
    y1 = y0 + Math.floor(Math.random() * domain * 2) - domain + 1;
    transition(element, x0, y0, x1, y1, 1, 1, 1);
    transition(element, x1, y1, x0, y0, 1, 1, 1);
    shakeCount--;
  }
  transition(element, x0, y0, x0, y0, 1, 1, 1);
  element.style.left = x0 + 'px';
  element.style.top = y0 + 'px';
}
