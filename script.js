const typed = new Typed("#typing", {
    strings: ["Web Developer", "Software Engineer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });

  const lines = [
    "> Initializing Skill Matrix...",
    "> Fetching core modules...",
  
    // Frontend
    "✔ HTML5 module loaded",
    "✔ CSS3 module loaded",
    "✔ Tailwind integrated with style 😎",
    "✔ JavaScript engine online",
    "✔ React components functional",
    "✔ JSP pages rendered",
  
    // Backend
    "✔ Node.js runtime stable",
    "✔ Java environment ready",
    "✔ JEE modules deployed",
    "✔ Spring framework blossomed",
    "✔ Hibernate detected... somehow",
    "✔ JDBC driver installed",
    "✔ Python scripts behaving (for now)",
  
    // Databases
    "✔ MongoDB connection successful",
    "✔ MySQL database connected",
  
    // Tools + Sarcasm
    "✔ Git initialized",
    "✔ GitHub repository linked",
    "<span class='warning'>⚠ Warning: Sleep schedule not found.</span>",
    "<span class='debug'>✔ Debugging skills: Always active.</span>",
  
    "",
    "> All systems nominal.",
    "> Developer ready for deployment 🚀"
  ];
  
  const terminal = document.querySelector(".terminal");
  let lineIndex = 0;
  
  function typeLine() {
    if (lineIndex < lines.length) {
      terminal.innerHTML += lines[lineIndex] +"<br>";
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scrolling effect
      });
      lineIndex++;
      setTimeout(typeLine, 500); // Typing speed between lines
    }
  }
  
  document.querySelector("#run").addEventListener("click",()=>{
    document.querySelector(".terminal").style.display="block";
    typeLine()
  })

  document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.querySelector(".contact-btn");
    const contactSection = document.querySelector(".contact-section");

    contactBtn.addEventListener("click", function (event) {
        event.preventDefault();
        contactSection.classList.toggle("active"); // Toggle visibility
    });

});

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");
  const contactBtn = document.getElementById("contact-btn");

  contactBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent jump (optional)
    contactSection.classList.toggle("active");

    // Optionally scroll into view
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  document.addEventListener("click", function (event) {
    if (
      !contactSection.contains(event.target) &&
      event.target !== contactBtn
    ) {
      contactSection.classList.remove("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("nav img");
  const mobileMenu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      if (!mobileMenu.contains(event.target) && event.target !== menuIcon) {
          mobileMenu.classList.remove("active");
      }
  });

  // Close menu when clicking a menu item
  document.querySelectorAll(".menu a").forEach(item => {
      item.addEventListener("click", () => {
          mobileMenu.classList.remove("active");
      });
  });
});




document.getElementById("contactForm").addEventListener("submit", function (e) {
  document.getElementById("contactForm").style.display="none";
  document.getElementById("responseMessage").innerText = "⏳ Sending...";
  const userName = document.getElementById("name").value;

  setTimeout(() => {
    document.getElementById("responseMessage").innerText = `MESSAGE RECEIVED, ${userName}. I'LL BE BACK.`;
    e.target.reset();
}, 1500);


  emailjs.init("M-Qy0bbKysJvnW06l"); // Replace with your EmailJS User ID

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ix73f98", "template_lekgvx5", formData)
        .then(response => {
            console.log("✅ Email sent successfully!", response);
            alert("Your message has been sent!");
        })
        .catch(error => {
            console.error("❌ Error sending email:", error);
            alert("Failed to send email. Try again!");
        });

        


});
