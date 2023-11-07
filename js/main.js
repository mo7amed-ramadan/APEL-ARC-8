// Declaring constants
// Label constants
const labelTeam = document.getElementById("labelName");
const labelAr = document.getElementById("labelAr");
const labelEn = document.getElementById("labelEn");
const labelEmail = document.getElementById("labelEmail");
const labelPhone = document.getElementById("labelPhone");
const labelNational = document.getElementById("labelNational");
const labelUniversity = document.getElementById("labelUniversity");
const labelFaculty = document.getElementById("labelFaculty");
const labelAcademicYear = document.getElementById("labelAcademicYear");
// Inputs Constants
const teamName = document.getElementById("teamName");
const arabicName = document.getElementById("arabicName");
const englishName = document.getElementById("englishName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const nationalId = document.getElementById("nationalId");
const university = document.getElementById("university");
const faculty = document.getElementById("faculty");
const academicYear = document.getElementById("academicYear");
// Submit button
const submit = document.getElementById("submit");
// Errors Constants
const tmError = document.getElementById("tm-error");
const arError = document.getElementById("ar-error");
const enError = document.getElementById("en-error");
const emError = document.getElementById("em-error");
const phError = document.getElementById("ph-error");
const ntError = document.getElementById("nt-error");
const unError = document.getElementById("un-error");
const fcError = document.getElementById("fc-error");
const yrError = document.getElementById("yr-error");
// Doing Focus Effect
// * Team Name
teamName.addEventListener("focus", () => {
  labelTeam.classList.add("show-label");
});
teamName.addEventListener("focusout", () => {
  labelTeam.classList.remove("show-label");
});
// * Arabic Name
arabicName.addEventListener("focus", () => {
  labelAr.classList.add("show-label");
});
arabicName.addEventListener("focusout", () => {
  labelAr.classList.remove("show-label");
});
// * English Name
englishName.addEventListener("focus", () => {
  labelEn.classList.add("show-label");
});
englishName.addEventListener("focusout", () => {
  labelEn.classList.remove("show-label");
});
// * Email
email.addEventListener("focus", () => {
  labelEmail.classList.add("show-label");
});
email.addEventListener("focusout", () => {
  labelEmail.classList.remove("show-label");
});
//  * Phone
phone.addEventListener("focus", () => {
  labelPhone.classList.add("show-label");
});
phone.addEventListener("focusout", () => {
  labelPhone.classList.remove("show-label");
});
//  * National Id
nationalId.addEventListener("focus", () => {
  labelNational.classList.add("show-label");
});
nationalId.addEventListener("focusout", () => {
  labelNational.classList.remove("show-label");
});
// * University
university.addEventListener("focus", () => {
  labelUniversity.classList.add("show-label");
});
university.addEventListener("focusout", () => {
  labelUniversity.classList.remove("show-label");
});
//  * Faculty
faculty.addEventListener("focus", () => {
  labelFaculty.classList.add("show-label");
});
faculty.addEventListener("focusout", () => {
  labelFaculty.classList.remove("show-label");
});
// * Academic Year
academicYear.addEventListener("focus", () => {
  labelAcademicYear.classList.add("show-label");
});
academicYear.addEventListener("focusout", () => {
  labelAcademicYear.classList.remove("show-label");
});
// Make Regex
submit.addEventListener("click", () => {
  validateTmName();
  validateArName();
  validateEnName();
  validateEmail();
  validateNational();
  extractInfo();
  validatePhone();
  validateUn();
  validateFc();
  validateYr();
});
// Validate Arabic Names
function validateTmName() {
  const tmName = teamName.value.trim();
  if (tmName == "") {
    teamName.classList.add("error");
    tmError.classList.remove("hide");
    tmError.classList.add("show");
    tmError.innerText = "ادخل اسمك الفريق بشكل صحيح";
  } else {
    teamName.classList.remove("error");
    tmError.innerText = "";
    tmError.classList.add("hide");
    tmError.classList.remove("show");
  }
}

// Validate Arabic Names
function validateArName() {
  const arNamePattern = /^[\u0600-\u06FF\s]+$/;
  const arName = arabicName.value.trim();
  if (arName == "" || !arNamePattern.test(arName)) {
    arabicName.classList.add("error");
    arError.classList.remove("hide");
    arError.classList.add("show");
    arError.innerText = "ادخل اسمك باللغة العربية بشكل صحيح";
    return false;
  } else {
    arabicName.classList.remove("error");
    arError.innerText = "";
    arError.classList.add("hide");
    arError.classList.remove("show");
    return true;
  }
}
// Validate English Names
function validateEnName() {
  const enNamePattern = /^[A-Za-z\s]+$/;
  const enName = englishName.value.trim();
  if (enName == "" || !enNamePattern.test(enName)) {
    englishName.classList.add("error");
    enError.classList.remove("hide");
    enError.classList.add("show");
    enError.innerText = "ادخل اسمك باللغة الإنجليزية بشكل صحيح";
  } else {
    englishName.classList.remove("error");
    enError.innerText = "";
    enError.classList.add("hide");
    enError.classList.remove("show");
  }
}
// Validate Email
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailName = email.value.trim();
  if (emailName == "" || !emailPattern.test(email)) {
    email.classList.add("error");
    emError.classList.remove("hide");
    emError.classList.add("show");
    emError.innerText = "ادخل الايميل بشكل صحيح";
  } else {
    email.classList.remove("error");
    emError.innerText = "";
    emError.classList.add("hide");
    emError.classList.remove("show");
  }
}
// Validate Phone
phone.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  const maxLength = 10;

  if (inputValue.length > maxLength) {
    event.target.value = inputValue.slice(0, maxLength);
  }
});
function validatePhone() {
  const phonePattern = /^\d{10}$/;
  const phoneValue = phone.value.trim();
  if (phoneValue == "" || !phonePattern.test(phoneValue)) {
    phone.classList.add("error");
    phError.classList.remove("hide");
    phError.classList.add("show");
    phError.innerText = "ادخل رقم الهاتف بشكل صحيح";
  } else {
    phone.classList.remove("error");
    phError.innerText = "";
    phError.classList.add("hide");
    phError.classList.remove("show");
  }
}
// Validate National Id
function validateNational() {
  const nationalPattern = /^\d{14}$/;
  const nationalValue = nationalId.value.trim();
  if (nationalValue == "" || !nationalPattern.test(nationalValue)) {
    nationalId.classList.add("error");
    ntError.classList.remove("hide");
    ntError.classList.add("show");
    ntError.innerText = "ادخل رقم الهوية الوطنية بشكل صحيح";
  } else {
    nationalId.classList.remove("error");
    ntError.innerText = "";
    ntError.classList.add("hide");
    ntError.classList.remove("show");
  }
}
// Validate University
function validateUn() {
  const unName = university.value.trim();
  if (unName == "") {
    university.classList.add("error");
    unError.classList.remove("hide");
    unError.classList.add("show");
    unError.innerText = "ادخل اسم الجامعة بشكل صحيح";
  } else {
    university.classList.remove("error");
    unError.innerText = "";
    unError.classList.add("hide");
    unError.classList.remove("show");
  }
}
// Validate Faculty
function validateFc() {
  const fcName = faculty.value.trim();
  if (fcName == "") {
    faculty.classList.add("error");
    fcError.classList.remove("hide");
    fcError.classList.add("show");
    fcError.innerText = "ادخل اسم الكلية بشكل صحيح";
  } else {
    faculty.classList.remove("error");
    fcError.innerText = "";
    fcError.classList.add("hide");
    fcError.classList.remove("show");
  }
}
// Validate Faculty
function validateYr() {
  const yrName = academicYear.value.trim();
  const yrPattern = /\d/;
  if (yrName == "" || !yrPattern.test(yrName) || yrName > 7) {
    academicYear.classList.add("error");
    yrError.classList.remove("hide");
    yrError.classList.add("show");
    yrError.innerText = "ادخل السنة الدراسية بشكل صحيح من 1 الى 7";
  } else {
    academicYear.classList.remove("error");
    yrError.innerText = "";
    yrError.classList.add("hide");
    yrError.classList.remove("show");
  }
}
// Extracting gender and date of birth from national Id
function extractInfo() {
  const nationalValue = nationalId.value;
  let year;
  let gender;
  if (nationalValue[0] == 3) {
    year = "20";
  } else if (nationalValue[0] == 2) {
    year = "19";
  }
  if (parseInt(nationalValue[12]) == 3) {
    gender = "male";
  } else if (parseInt(nationalValue[12]) == 2) {
    gender = "female";
  }
  let birthYear = nationalValue.slice(1, 3);
  let birthMonth = nationalValue.slice(3, 5);
  let birthDay = nationalValue.slice(5, 7);

  console.log(
    `the date of birth is ${birthDay} / ${birthMonth} / ${year}${birthYear} and the gender is ${gender}`
  );
}
