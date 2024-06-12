var regName = /^[a-zA-Z]+$/;
function validateName() {
  var fnameInput = document.getElementById("firstnameinput");
  var fname = fnameInput.value.trim();
  console.log(fname);
  let spf = document.getElementById("spfirstname");
  if (regName.test(fname) || fname.length === 0) {
    spf.innerText = "";
  } else {
    spf.innerText = "Numbers are not allow";
    console.log(regName.test(fname));
  }
}

var regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function validateEmail() {
  var emailInput = document.getElementById("Emailinput");
  var email = emailInput.value.trim();

  let spe = document.getElementById("spEmail");
  if (regEmail.test(email) == true || email.length === 0) {
    spe.innerHTML = "";
  } else {
    spe.innerText = "the e-mail is not valid";
  }
}

var dateNumber =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; // object defined
function Bdateor() {
  var dateNumberInput = document.getElementById("Bdateinput");
  var dNumber = dateNumberInput.value.trim();
  console.log(dNumber);

  let dat = document.getElementById("spBdate");
  if (dateNumber.test(dNumber) == true || dNumber.length === 0) {
    dat.innerHTML = "";
  } else {
    dat.innerHTML = "The format should be dd/mm/yy";
  }
}
