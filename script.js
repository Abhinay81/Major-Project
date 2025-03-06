document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = {};
  let emailInput = document.getElementById("myemail").value;
  formData["Email address"] = emailInput;

  document.querySelectorAll(".rating input:checked").forEach((input) => {
    formData[input.name] = input.value;
  });

  if (Object.keys(formData).length <= 1) {
    alert("Please select at least one rating before submitting.");
    return;
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbzIcez0CjbeZ2EFw1uJvNZKtKscqRvQhb4fvyB4mPVKoZUvLaJd9n0hjEBaOcNo-BdedA/exec",
    {
      method: "POST",
      mode: "no-cors", // ✅ CORS fix
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => {
      alert("Ratings submitted successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting your ratings. Please try again.");
    });
});
