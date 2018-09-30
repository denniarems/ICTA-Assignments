function check() {
  let email = document.forms["reg"]["email"];
  let phone = document.forms["reg"]["phone"];
  let first = document.forms["reg"]["first"];
  let last = document.forms["reg"]["last"];
  let user = document.forms["reg"]["user"];
  let pass = document.forms["reg"]["pass"];
  let pass2 = document.forms["reg"]["pass2"];
  let ev = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passw = /^[A-Za-z]\w{7,14}$/;
  let phoneno = /^\d{10}$/;

  if (first.value == "") {
    document.getElementById("error").innerHTML =
      "=> Please enter a valid first name.";
    first.focus();
    return false;
  }

  if (last.value == "") {
    document.getElementById("error").innerHTML = "Please enter a valid last.";
    last.focus();
    return false;
  }

  if (!email.value.match(ev)) {
    document.getElementById("error").innerHTML =
      "Please enter a valid e-mail address.";
    email.focus();
    return false;
  }
  if (user.value == "") {
    document.getElementById("error").innerHTML =
      "Please enter a valid Username.";
    user.focus();
    return false;
  }
  if (!phone.value.match(phoneno)) {
    document.getElementById("error").innerHTML =
      "Please enter your Phone number.";
    phone.focus();
    return false;
  }

  if (!pass.value.match(passw)) {
    document.getElementById("error").innerHTML =
      "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter";
    password.focus();
    return false;
  }
  if (pass2.value != pass.value) {
    document.getElementById("error").innerHTML = "Passwords do not match.";
    password.focus();
    return false;
  }

  return true;
}
