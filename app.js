// בחר modal-btn,modal-overlay,close-btn
// האזינו לאירועי קליק ב-modal-btn ו-close-btn
// כאשר משתמש לוחץ על modal-btn הוסף את .open-modal ל-modal-overlay
// כאשר משתמש לוחץ על close-btn הסר את .open-modal מ-modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
