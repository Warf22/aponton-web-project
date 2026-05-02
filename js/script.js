const campForm = document.getElementById("campForm");
const userName = document.getElementById("userName");
const campPlace = document.getElementById("campPlace");
const messageBox = document.getElementById("messageBox");

campForm.addEventListener("submit", function(event) {
   event.preventDefault();

   const nameValue = userName.value.trim();
   const placeValue = campPlace.value.trim();

   if (nameValue === "" || placeValue === "") {
      alert("Please enter your name and your favorite place to camp.");
      messageBox.textContent = "Please enter your name and your favorite place to camp.";
      return;
   }

   const message = "Thanks, " + nameValue + ". " + placeValue + " sounds like a great place to camp.";
   alert(message);
   messageBox.textContent = message;
});