function validateName() {
  let name = document.f1.name.value;
  let err = document.getElementById("err1");
  if (name == "") {
    err.style.display = "block";
    return false;
  } else {
    err.style.display = "none";
    return true;
  }
}

function validateEmail() {
  let email = document.f1.email.value;
  let err = document.getElementById("err2");
  let validerr = document.getElementById("err3");
  let emailPattern = /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
  if (email == "") {
    err.style.display = "block";
    validerr.style.display = "none";
    return false;
  } else {
    err.style.display = "none";
    if (!emailPattern.test(email)) {
      validerr.style.display = "block";
      return false;
    } else {
      validerr.style.display = "none";
    }
  }
  return true;
}

function validateGender() {
  let gender = document.f1.gender;
  let err = document.getElementById("err4");
  if (!(gender.value == "male" || gender.value == "female")) {
    err.style.display = "block";
    return false;
  } else {
    err.style.display = "none";
  }
  return true;
}

function validateUsername() {
  let username = document.f1.username.value;
  let err = document.getElementById("err8");
  if (username == "") {
    err.style.display = "block";
    return false;
  } else {
    err.style.display = "none";
    return true;
  }
}

function validatePassword() {
  let password = document.f1.password.value;
  let err = document.getElementById("err5");
  let validerr = document.getElementById("err6");
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\@\%]).{8,}$/;
  if (password == "") {
    err.style.display = "block";
    validerr.style.display = "none";
    return false;
  } else {
    err.style.display = "none";
    if (!passwordPattern.test(password)) {
      validerr.style.display = "block";
      return false;
    } else {
      validerr.style.display = "none";
    }
  }
  return true;
}

function confirmPassword() {
  let password = document.f1.password.value;
  let confirm = document.f1.confirm.value;
  let err = document.getElementById("err7");
  if(password!=confirm){
    err.style.display = "block";
    return false;
  }
  else{
    err.style.display = "none";
  }
  return true;
}

function validation() {
  let name = validateName();
  let email = validateEmail();
  let username = validateUsername();
  let password = validatePassword();
  let gender = validateGender();
  let confirm = confirmPassword();

  if(name && email && username && password && gender && confirm){
    return true;
  }
  else{
    return false;
  }
}
