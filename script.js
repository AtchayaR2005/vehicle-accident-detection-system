document.getElementById("detectBtn").addEventListener("click", function() {
  const alertBox = document.getElementById("alertBox");
  alertBox.classList.remove("hidden");

  const alertSound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
  alertSound.play();

  alert("Accident detected! Emergency alert sent.");
});
