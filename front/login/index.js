const bluelogosrc = "../resources/blue_logo.png";
const blacklogosrc = "../resources/black_logo.png";
const multilogosrc = "../resources/multi_logo.png";
const signinsrc = "../resources/signinpic.gif";
const signupsrc = "../resources/signuppic.jpg";
const errlightsrc = "../resources/errpiclight.jpg";
const errdarksrc = "../resources/errpicdark.jpg";

function loadFunc() {
    resizeFunc();
    document.getElementById("picframe").src = signinsrc;
    loadtheme(1);
}

var theme = 1;
function themeToggle() {
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark');
    theme = (theme == 1) ? 0 : 1;
    loadiconimg();
}

function loadtheme(themeid) {
    if (themeid != theme) {
        themeToggle();
    }
    loadiconimg();
}

function loadiconimg(){
    img = document.getElementById("logoimageid");
    if (theme == 1) {
        img.src = bluelogosrc;
    } else if (theme == 0) {
        img.src = blacklogosrc;
    }
}

function hovericon() {
    document.getElementById("logoimageid").src = multilogosrc;
}

function unhovericon() {
    document.getElementById("logoimageid").src = (theme == 1) ? bluelogosrc : blacklogosrc;
}

function resizeFunc() {
    if (window.innerWidth <= 600) {
        document.getElementById("picframe").style.display = "none";
        document.getElementById("raisedsegment").style.width = "332px";
    } else {
        document.getElementById("picframe").style.display = "block";
        document.getElementById("raisedsegment").style.width = "1000px";
    }
}

var tabNum = 0;
//Issue: mouse hover style gone 
function changetab(mode) {
    var siform = document.getElementById("signInForm");
    var suform = document.getElementById("signUpForm");
    var sibtab = document.getElementById("sibtn");
    var subtab = document.getElementById("subtn");
    var picFrame = document.getElementById("picframe");
    if (mode == 'si' && tabNum == 1) {
        hSlide(siform, -315, 15, 30, 1);
        hSlide(suform, 15, 345, 30, 1);
        sibtab.setAttribute('style', "  background-color: var(--tab_button_active); color: var(--tab_button_active_font);");
        subtab.setAttribute('style', "  background-color: var(--tab_button); color: var(--tab_button_font);");
        picFrame.src = signinsrc;
        tabNum = 0;
    } else if (mode == 'su' && tabNum == 0) {
        hSlide(siform, 15, -315, 30, 1);
        hSlide(suform, 345, 15, 30, 1);
        subtab.setAttribute('style', "  background-color: var(--tab_button_active); color: var(--tab_button_active_font);");
        sibtab.setAttribute('style', "  background-color: var(--tab_button); color: var(--tab_button_font);");
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
    container = document.getElementById("raisedsegment");
    cssVars = getComputedStyle(document.documentElement);
    form = document.getElementById("signInForm");
    mail_input = document.getElementById("siemail");
    pass_input = document.getElementById("sipass");
    err_message = document.getElementById("sierrmsg");
    err_list = document.getElementById("sierrlist");
    mail_field = document.getElementById("sim");
    pass_field = document.getElementById("sip");
    picFrame = document.getElementById("picframe");
    mail = document.getElementById("siemail").getElementsByTagName("*")[0].value;
    pass = document.getElementById("sipass").getElementsByTagName("*")[0].value;
    pass = document.getElementById("sipass").getElementsByTagName("*")[0].value;
    form.style.marginTop = "150px";
    formStepDecrease = 15;
    mail_input.className = "field";
    pass_input.className = "field";
    mail_field.style.borderColor = cssVars.getPropertyValue('--field');
    pass_field.style.borderColor = cssVars.getPropertyValue('--field');
    picFrame.src = signinsrc;
    err_message.style.display = "none";
    err_list.innerHTML = "";
    err = false;

    if (mail == "") {
        err = true;
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        mail_input.className = "field error";
        mail_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
        err_list.innerHTML += "<li>ایمیلی درج نشده است.</li>";
    }
    else
        if (!validateEmail(mail)) {
            err = true;
            form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
            mail_input.className = "field error";
            mail_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
            err_list.innerHTML += "<li>ایمیل وارد شده نامعتبر است.</li>";
        }

    if (pass == "") {
        err = true;
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        pass_input.className = "field error";
        pass_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
        err_list.innerHTML += "<li>رمز عبوری درج نشده است.</li>";
    }

    if (err) {
        unfade(err_message);
        shake(container, 20, 15, 0, 0);
        picFrame.src = (theme == 1) ? errlightsrc : errdarksrc;
    }

}

function signUpFormValidation() {
    container = document.getElementById("raisedsegment");
    cssVars = getComputedStyle(document.documentElement);
    form = document.getElementById("signUpForm");
    mail_input = document.getElementById("suemail");
    pass_input = document.getElementById("supass");
    repass_input = document.getElementById("surepass");
    checkbox_input = document.getElementById("suchbox");
    err_message = document.getElementById("suerrmsg");
    err_list = document.getElementById("suerrlist");
    mail_field = document.getElementById("sum");
    pass_field = document.getElementById("sup");
    repass_field = document.getElementById("surp");
    checkbox_lable = document.getElementById("chl");
    picFrame = document.getElementById("picframe");
    mail = document.getElementById("suemail").getElementsByTagName("*")[0].value;
    pass = document.getElementById("supass").getElementsByTagName("*")[0].value;
    repass = document.getElementById("surepass").getElementsByTagName("*")[0].value;
    checkbox = document.getElementById("chbox")
    form.style.marginTop = "110px";
    formStepDecrease = 13;
    mail_input.className = "field";
    pass_input.className = "field";
    repass_input.className = "field";
    checkbox_input.className = "field";
    mail_field.style.borderColor = cssVars.getPropertyValue('--field');
    pass_field.style.borderColor = cssVars.getPropertyValue('--field');
    repass_field.style.borderColor = cssVars.getPropertyValue('--field');
    checkbox_lable.style.color = cssVars.getPropertyValue('--field');
    picFrame.src = signupsrc;
    err_message.style.display = "none";
    err_list.innerHTML = "";
    err = false;

    if (mail == "") {
        err = true;
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        mail_input.className = "field error";
        mail_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
        err_list.innerHTML += "<li>ایمیلی درج نشده است.</li>";
    }
    else
        if (!validateEmail(mail)) {
            err = true;
            form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
            mail_input.className = "field error";
            mail_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
            err_list.innerHTML += "<li>ایمیل وارد شده نامعتبر است.</li>";
        }

    if (pass == "") {
        err = true;
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        pass_input.className = "field error";
        pass_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
        err_list.innerHTML += "<li>رمز عبوری درج نشده است.</li>";
    } else
        if (pass != "" && repass == "") {
            err = true;
            form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
            repass_input.className = "field error";
            repass_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
            err_list.innerHTML += "<li>رمز عبور وارد شده تکرار نشده است.</li>";
        } else
            if (pass != repass) {
                err = true;
                form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
                repass_input.className = "field error";
                pass_input.className = "field error";
                pass_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
                repass_field.style.borderColor = cssVars.getPropertyValue('--err_box_font');
                err_list.innerHTML += "<li>رمز های عبور با یکدیگر مطابقت نمیکنند.</li>";
            }

    if (!checkbox.checked) {
        err = true;
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        checkbox_input.className = "field error";
        checkbox_lable.style.color = cssVars.getPropertyValue('--err_box_font');
        err_list.innerHTML += "<li>قوانین و شرایط باید پذیرفته شوند.</li>";
    }

    if (err) {
        unfade(err_message);
        shake(container, 20, 15, 0, 0);
        picFrame.src = (theme == 1) ? errlightsrc : errdarksrc;
    }

}

function loginPageHide() {
    container = document.getElementById("bodycontainer");
    vslide(container, 0, -1000, 10, 1);
    fade(container, function () {
        document.getElementById("lpshup").style.display = "block";        // for testing
    });
}

function loginPageShowUp() {
    document.getElementById("lpshup").style.display = "none";        // for testing
    container = document.getElementById("bodycontainer");
    vslide(container, -300, 0, 10, 1);
    unfade(container);
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

function fade(element, nf) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            nf();
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
