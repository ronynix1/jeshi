document.getElementById("checkinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("checkin.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("responseMessage").innerText = data;
      this.reset();
    })
    .catch((error) => {
      document.getElementById("responseMessage").innerText = "Error: " + error;
    });
});

