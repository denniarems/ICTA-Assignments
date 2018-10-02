let ev = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passw = /^[A-Za-z]\w{7,14}$/;
let phoneno = /^\d{10}$/;

function check() {
  let email = document.forms["reg"]["email"];
  let phone = document.forms["reg"]["phone"];
  let first = document.forms["reg"]["first"];
  let last = document.forms["reg"]["last"];
  let user = document.forms["reg"]["user"];
  let pass = document.forms["reg"]["pass"];
  let pass2 = document.forms["reg"]["pass2"];

  first.addEventListener("blur", firstVerify, true);
  last.addEventListener("blur", lastVerify, true);
  user.addEventListener("blur", userVerify, true);
  email.addEventListener("blur", emailVerify, true);
  phone.addEventListener("blur", phoneVerify, true);
  pass.addEventListener("blur", passVerify, true);
  pass2.addEventListener("blur", pass2Verify, true);

  if (first.value == "") {
    document.getElementById("1").style.borderColor = "#FA0129";
    first.focus();
    return false;
  }

  if (last.value == "") {
    document.getElementById("2").style.borderColor = "#FA0129";
    // document.getElementById("error").innerHTML = "Please enter a valid last.";
    last.focus();
    return false;
  }

  if (!email.value.match(ev)) {
    document.getElementById("3").style.borderColor = "#FA0129";
    // document.getElementById("error").innerHTML =
    // "Please enter a valid e-mail address.";
    email.focus();
    return false;
  }
  if (user.value == "") {
    // document.getElementById("error").innerHTML =
    // "Please enter a valid Username.";
    document.getElementById("4").style.borderColor = "#FA0129";
    user.focus();
    return false;
  }

  if (!phone.value.match(phoneno)) {
    // document.getElementById("error").innerHTML =
    // "Please enter your Phone number.";
    document.getElementById("5").style.borderColor = "#FA0129";
    phone.focus();
    return false;
  }

  if (!pass.value.match(passw)) {
    // document.getElementById("error").innerHTML =
    // "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter";
    document.getElementById("6").style.borderColor = "#FA0129";
    password.focus();
    return false;
  }
  if (pass2.value != pass.value) {
    // document.getElementById("error").innerHTML = "Passwords do not match.";
    document.getElementById("7").style.borderColor = "#FA0129";
    password.focus();
    return false;
  }

  return true;
}
// event handler functions
function userVerify() {
  if (user.value != "" && user.value.length < 3) {
    document.getElementById("4").style.borderColor = "#2ecc71";
    return true;
  }
}
function firstVerify() {
  if (first.value != "") {
    document.getElementById("1").style.borderColor = "#2ecc71";

    return true;
  }
}
function lastVerify() {
  if (last.value != "") {
    document.getElementById("2").style.borderColor = "#2ecc71";

    return true;
  }
}
function emailVerify() {
  if (email.value.match(ev)) {
    document.getElementById("3").style.borderColor = "#2ecc71";

    return true;
  }
}
function phoneVerify() {
  document.getElementById("5").style.borderColor = "#2ecc71";
  if (phone.value.match(phoneno)) {
    return true;
  }
}
function passVerify() {
  if (pass.match(passw)) {
    document.getElementById("6").style.borderColor = "#2ecc71";

    return true;
  }
}
function pass2Verify() {
  if (pass.value === pass2.value) {
    document.getElementById("7").style.borderColor = "#2ecc71";

    return true;
  }
}
