// Select elements
const rating = document.querySelectorAll(".rate");
const submit = document.querySelector(".btn");
const ratingBox = document.getElementById("rating_box");
const thankyouBox = document.getElementById("thankyou_box");
const response = document.getElementById("rated");

let rated = 0;

// Add click event to rating options
for (const rate of rating) {
  rate.addEventListener("click", function () {
    rated = rate.innerHTML;
  });
}

// Add click event to submit button
submit.addEventListener("click", function () {
  if (rated > 0) {
    // Ensure a rating has been selected
    ratingBox.style.display = "none"; // Hide the rating box
    thankyouBox.style.display = "block"; // Show the thank you box
    response.textContent = rated;

    // Reset after 3 seconds
    setTimeout(function () {
      thankyouBox.style.display = "none"; // Hide the thank you box
      ratingBox.style.display = "block"; // Show the rating box again
      rated = 0; // Reset the rating value
      response.textContent = ""; // Clear the response text
    }, 3000); // 3000 milliseconds = 3 seconds
  } else {
    alert("Please select a rating before submitting."); // Alert if no rating is selected
  }
});
