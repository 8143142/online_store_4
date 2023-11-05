var attempts = 0;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var target = ev.target;
  var verificationStatus = document.getElementById("verification-status");
  var incorrectMessage = document.getElementById("incorrect-message");
  var continueButton = document.getElementById("continue-button");

  if (target.classList.contains("correct-target") && draggedElement.id === "drag1") {
    target.appendChild(draggedElement);
    verificationStatus.style.display = "block";
    verificationStatus.textContent = "Verified!";
    incorrectMessage.style.display = "none";
    draggedElement.draggable = false;
    continueButton.style.display = "block"; // Show the "Continue" button

    var correctTargets = document.querySelectorAll(".correct-target");
    var newIndex = Math.floor(Math.random() * 3);
    while (newIndex === 1) {
      newIndex = Math.floor(Math.random() * 3);
    }
    correctTargets[0].classList.remove("correct-target");
    correctTargets[newIndex].classList.add("correct-target");
  } else {
    incorrectMessage.style.display = "block";
    attempts++;
    if (attempts >= 3) {
      verificationStatus.textContent = "Verification Closed. Try again after 5 minute";
      continueButton.style.display = "none";

      var correctTargets = document.querySelectorAll(".correct-target");
      // Change the correct target to a different class after three failed attempts
      var newIndex = Math.floor(Math.random() * 3);
      while (newIndex === 1) {
        newIndex = Math.floor(Math.random() * 3);
      }
      correctTargets[0].classList.remove("correct-target");
      correctTargets[newIndex].classList.add("correct-target");

    }
  }
}

function continueVerification() {
  alert("Верификация прошла успешна!"); 
}
