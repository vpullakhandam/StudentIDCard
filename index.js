function generateCard() {
  // input values
  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  const location = `${city}, ${country}`;

  // upload image
  const image = document.getElementById("image").files[0];

  // Set the values in the card
  document.getElementById("card-name").textContent = name;
  document.getElementById("card-college").textContent = college;
  document.getElementById("card-location").textContent = location;

  // Display the uploaded image on the card if available
  if (image) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgSrc = event.target.result;
      document.getElementById("card-img").src = imgSrc;
    };

    reader.readAsDataURL(image);
  }

  document.querySelector(".card").style.display = "block";
}
