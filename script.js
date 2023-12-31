function resetCardContent() {
    let a = document.getElementById("cardTitle");
    a.innerHTML =
      "FrontEnd Developer <span class='material-symbols-outlined' onclick='closePopUp()'> dangerous </span>";
    let b = document.getElementById("cardContent1");
    b.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span>Responsive Web Design";

    let c = document.getElementById("cardContent2");
    c.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span>Interactive User Interfaces";

    let d = document.getElementById("cardContent3");
    d.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span>SEO-Friendly Implementations";

    let e = document.getElementById("cardContent4");
    e.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span>Accessibility and UX Enhancement";
  }

  function card1() {
    let blurElements = document.querySelectorAll(".abbu");
    blurElements.forEach((element) => {
      element.style.filter = "blur(4px)";
    });
    let popUp = document.getElementById("card-1");
    popUp.style.display = "block";

    // Reset content
    resetCardContent();
  }

  function closePopUp() {
    let blurElements = document.querySelectorAll(".abbu");
    blurElements.forEach((element) => {
      element.style.filter = "none";
    });
    let popUp = document.getElementById("card-1");
    popUp.style.display = "none";

    // Reset content
    resetCardContent();
  }

  function card2() {
    let blurElements = document.querySelectorAll(".abbu");
    blurElements.forEach((element) => {
      element.style.filter = "blur(4px)";
    });
    let popUp = document.getElementById("card-1");
    popUp.style.display = "block";

    let a = document.getElementById("cardTitle");
    a.innerHTML =
      "Ui/UxDesigner <span class='material-symbols-outlined' onclick='closePopUp()'> dangerous </span>";

    let b = document.getElementById("cardContent1");
    b.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Intuitive User Interface Design";

    let c = document.getElementById("cardContent2");
    c.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Responsive and Mobile-First Design";

    let d = document.getElementById("cardContent3");
    d.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Seamless User Experience Optimization";

    let e = document.getElementById("cardContent4");
    e.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Accessibility and Usability Enhancements";
  }

  function card3() {
    let blurElements = document.querySelectorAll(".abbu");
    blurElements.forEach((element) => {
      element.style.filter = "blur(4px)";
    });
    let popUp = document.getElementById("card-1");
    popUp.style.display = "block";

    let a = document.getElementById("cardTitle");
    a.innerHTML =
      "Backend Developer <span class='material-symbols-outlined' onclick='closePopUp()'> dangerous </span>";

    let b = document.getElementById("cardContent1");
    b.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Scalable architecture for handling increased loads efficiently";

    let c = document.getElementById("cardContent2");
    c.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Robust API development enabling seamless data exchange";

    let d = document.getElementById("cardContent3");
    d.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Implementing strong data security measures.";

    let e = document.getElementById("cardContent4");
    e.innerHTML =
      "<span class='material-symbols-outlined mr-2'>check_circle</span> Optimizing databases for fast and reliable data access.";
  }

  const img = document.getElementById("projectImg");
  const projectHeading = document.getElementById("projectHeading");
  const projectContent = document.getElementById("projectContent");
  const projectLink = document.getElementById("projectLink");

  let counter = 1;

  setInterval(() => {
    counter = (counter % 3) + 1;

    // Apply fade-out effect before changing image
    img.style.opacity = 0;

    setTimeout(() => {
      // Change the image source after the fade-out effect
      img.src = `project${counter}.svg`;

      // Update content based on the image
      if (counter === 1) {
        projectHeading.innerText = "Skill Assessment";
        projectContent.innerText = "A skill assessment platform allowing employees to take tests, view their scores, and compare results with peers for performance evaluation and growth tracking";
        projectLink.href = "https://google.com";
      } else if (counter === 2) {
        projectHeading.innerText = "Travel Protal";
        projectContent.innerText = "A comprehensive travel portal enabling users to book tours, agents to create packages, and admin control to grant agent access for seamless tour management and bookings.";
        projectLink.href = "https://facebook.com";
      } else if (counter === 3) {
        projectHeading.innerText = "Hotel Booking System";
        projectContent.innerText ="A robust hotel booking system with a backend API , facilitating seamless interactions for managing hotel reservations, guest information, and room availability.";
        projectLink.href = "https://facebook.com";
      }

      // Apply fade-in effect after changing image
      img.style.opacity = 1;
    }, 500); // Change content after the fade-out effect (0.5s)
  }, 3000);


  const educationTitle = document.getElementById("educationTitle");
const educationContent = document.getElementById("educationContent");
const educationDate = document.getElementById("educationDate");
const toggleColorElements = document.querySelectorAll('.toggleColor');
const abraar = document.querySelectorAll('.abraar');

toggleColorElements.forEach(element => {
element.addEventListener('click', function() {
// Remove existing 'purple' class from all elements
toggleColorElements.forEach(el => el.classList.remove('purple'));

// Add 'purple' class to the clicked element
this.classList.add('purple');

// Get the data-type attribute to determine the content to display
const dataType = this.getAttribute('data-type');

// Update content based on the clicked element
if (dataType === 'education') {
  educationTitle.innerText = 'Computer Science Engineering';
  educationContent.innerText = 'GCET Kashmir';
  educationDate.innerText = '2022 - 2026';
  abraar.forEach(item => item.style.display = 'flex');
} else if (dataType === 'work') {
  educationTitle.innerText = 'Kanini Software Solution';
  educationContent.innerText = 'Chennai';
  educationDate.innerText = 'Feb-2023 Nov-2023';
  abraar.forEach(item => item.style.display = 'none');
}
});
});

function downloadResume() {
// Replace 'path_to_your_pdf_file.pdf' with the actual path to your PDF file
const fileUrl = 'Abraar J(Product Engineer).pdf';

// Create an anchor element
const link = document.createElement('a');
link.href = fileUrl;

// Set the download attribute with the desired file name
link.setAttribute('download', 'Abraar-Resume.pdf');

// Append the anchor to the body and programmatically trigger a click event
document.body.appendChild(link);
link.click();

// Clean up by removing the anchor from the body
document.body.removeChild(link);
}


function scrollToDown() {
const element = document.querySelector('.scrollToDown');
if (element) {
element.scrollIntoView({
  behavior: 'smooth'
});
}
}

