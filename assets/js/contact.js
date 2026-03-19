window.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Eiepc66CLfc3LE6FW");
  const form = document.getElementById("form");
  const sucmodal = document.querySelector(".suc-modal"),
    contact = document.querySelector(".contact-card");

  function showModal() {
    sucmodal.style.display = "block";
    contact.style.display = "none";
  }

  function hideModal() {
    sucmodal.style.display = "none";
    contact.style.display = "block";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const textArea = document.querySelector("#message");

    if (textArea.value.length < 10) {
      document.querySelector(".error-massage").style.display = "block";
      textArea.style.outline = "2px solid rgb(197, 0, 0)";
      setTimeout(() => {
        document.querySelector(".error-massage").style.display = "none";
        textArea.style.outline = "0px";
      }, 3000);
    } else {
      emailjs
        .sendForm("service_6i904rp", "template_hopz0q7", form)
        .then(() => {
          showModal();
          setTimeout(() => {
            hideModal();
          }, 2000);
        })
        .catch((error) => {
          console.log("Ошибка:", error);
        });
    }
  });
});
