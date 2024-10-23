document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      // Prevent form submission if not valid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      //validation styling
      form.classList.add("was-validated");
    });
  });
});
