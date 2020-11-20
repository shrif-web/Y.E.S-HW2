//TODO: add slide animation
function resizeFunc(){
    if (window.innerWidth < 1000) {
        document.getElementById("picframe").style.display = "none";
        document.getElementById("mainContainer").style.width = "360px";
    }else{
        document.getElementById("picframe").style.display = "block";
        document.getElementById("mainContainer").style.width = "1000px";
    }
}


//TODO: add slide animation
//Issue: mouse hover style gone 
function changetab(mode) {
    var siform = document.getElementById("signInForm");
    var suform = document.getElementById("signUpForm");
    var sibtab = document.getElementById("sibtn");
    var subtab = document.getElementById("subtn");
    if (mode == 'si' && siform.style.display == 'none') {
        suform.style.display = 'none';
        siform.style.display = 'block';
        sibtab.setAttribute('style', "  background-color: var(--tab_button_active); color: var(--tab_button_active_font);");
        subtab.setAttribute('style', "  background-color: var(--tab_button); color: var(--tab_button_font);");
    } else if (mode == 'su' && suform.style.display == 'none') {
        suform.style.display = 'block';
        siform.style.display = 'none';
        subtab.setAttribute('style', "  background-color: var(--tab_button_active); color: var(--tab_button_active_font);");
        sibtab.setAttribute('style', "  background-color: var(--tab_button); color: var(--tab_button_font);");
    }
}

//TODO: fade animation
function closeErrMsg(msg) {
    document.getElementById(msg).style.display = 'none';
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//TODO: animation
function signInFormValidation() {
    form = document.getElementById("signInForm");
    mail_input = document.getElementById("siemail");
    pass_input = document.getElementById("sipass");
    err_message = document.getElementById("sierrmsg");
    err_list = document.getElementById("sierrlist");
    mail = document.getElementById("siemail").getElementsByTagName("*")[0].value;
    pass = document.getElementById("sipass").getElementsByTagName("*")[0].value;
    pass = document.getElementById("sipass").getElementsByTagName("*")[0].value;
    form.style.marginTop = "120px";
    formStepDecrease = 15;
    mail_input.className = "field";
    pass_input.className = "field";
    err_message.style.display = "none";
    err_list.innerHTML = "";

    if (mail == "") {
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        err_message.style.display = "block";
        mail_input.className = "field error";
        err_list.innerHTML += "<li>ایمیلی درج نشده است.</li>";
    }
    else
        if (!validateEmail(mail)) {
            form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
            err_message.style.display = "block";
            mail_input.className = "field error";
            err_list.innerHTML += "<li>ایمیل وارد شده نامعتبر است.</li>";
        }

    if (pass == "") {
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        err_message.style.display = "block";
        pass_input.className = "field error";
        err_list.innerHTML += "<li>رمز عبوری درج نشده است.</li>";
    }

}

//TODO: animation
function signUpFormValidation() {
    form = document.getElementById("signUpForm");
    mail_input = document.getElementById("suemail");
    pass_input = document.getElementById("supass");
    repass_input = document.getElementById("surepass");
    checkbox_input = document.getElementById("suchbox");
    err_message = document.getElementById("suerrmsg");
    err_list = document.getElementById("suerrlist");
    mail = document.getElementById("suemail").getElementsByTagName("*")[0].value;
    pass = document.getElementById("supass").getElementsByTagName("*")[0].value;
    repass = document.getElementById("surepass").getElementsByTagName("*")[0].value;
    checkbox = document.getElementById("chbox")
    form.style.marginTop = "75px";
    formStepDecrease = 15;
    mail_input.className = "field";
    pass_input.className = "field";
    repass_input.className = "field";
    checkbox_input.className = "field";
    err_message.style.display = "none";
    err_list.innerHTML = "";

    if (mail == "") {
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        err_message.style.display = "block";
        mail_input.className = "field error";
        err_list.innerHTML += "<li>ایمیلی درج نشده است.</li>";
    }
    else
        if (!validateEmail(mail)) {
            form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
            err_message.style.display = "block";
            mail_input.className = "field error";
            err_list.innerHTML += "<li>ایمیل وارد شده نامعتبر است.</li>";
        }

    if (pass == "") {
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        err_message.style.display = "block";
        pass_input.className = "field error";
        err_list.innerHTML += "<li>رمز عبوری درج نشده است.</li>";
    } else
        if (pass != "" && repass == "") {
            form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
            err_message.style.display = "block";
            repass_input.className = "field error";
            err_list.innerHTML += "<li>رمز عبور وارد شده تکرار نشده است.</li>";
        } else
            if (pass != repass) {
                form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
                err_message.style.display = "block";
                repass_input.className = "field error";
                pass_input.className = "field error";
                err_list.innerHTML += "<li>رمز های عبور با یکدیگر مطابقت نمیکنند.</li>";
            }

    if (!checkbox.checked) {
        form.style.marginTop = (parseInt(form.style.marginTop) - formStepDecrease) + "px";
        err_message.style.display = "block";
        checkbox_input.className = "field error";
        err_list.innerHTML += "<li>قوانین و شرایط باید پذیرفته شوند.</li>";
    }

}

