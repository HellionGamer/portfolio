function displayGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  let message;
  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  greeting.textContent = message;

  
  document.getElementById("year").textContent = new Date().getFullYear();
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}
// Popup modal logic
function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  // Close modal if clicked outside the modal content
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
  function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (e.g., +254712345678).");
      return false;
    }
  
    if (message.length < 10) {
      alert("Your message must be at least 10 characters long.");
      return false;
    }
  
    alert("Message submitted successfully!");
    return true;
  }
  function validateSurveyForm() {
    const radios = document.querySelectorAll('input[name="experience"]');
    let radioSelected = false;
    radios.forEach(radio => {
      if (radio.checked) radioSelected = true;
    });
  
    const suggestions = document.getElementById("suggestions").value.trim();
  
    if (!radioSelected) {
      alert("Please select your experience rating.");
      return false;
    }
  
    if (suggestions.length < 5) {
      alert("Please provide a more detailed suggestion.");
      return false;
    }
  
    alert("Survey submitted successfully. Thank you!");
    return true;
  }
  
  