// Declaring constants
const labelTeam = document.getElementById("labelName");
const labelAr = document.getElementById("labelAr");
const labelEn = document.getElementById("labelEn");
const labelEmail = document.getElementById("labelEmail");
const labelPhone = document.getElementById("labelPhone");
const labelNational = document.getElementById("labelNational");
const labelUniversity = document.getElementById("labelUniversity");
const labelFaculty = document.getElementById("labelFaculty");
const labelAcademicYear = document.getElementById("labelAcademicYear");
const teamName = document.getElementById("teamName");
const arabicName = document.getElementById("arabicName");
const englishName = document.getElementById("englishName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const nationalId = document.getElementById("nationalId");
const university = document.getElementById("university");
const faculty = document.getElementById("faculty");
const academicYear = document.getElementById("academicYear");

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
