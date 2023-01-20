const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    if (entry.target.id == "contact" && entry.isIntersecting) {
      console.log(entry.target);
      document.getElementById("nav-icarus").classList.remove("active");
      document.getElementById("nav-team").classList.remove("active");
      document.getElementById("nav-contact").classList.add("active");
    }
    if (entry.target.id == "team" && entry.isIntersecting) {
      console.log(entry.target);
      document.getElementById("nav-icarus").classList.remove("active");
      document.getElementById("nav-contact").classList.remove("active");
      document.getElementById("nav-team").classList.add("active");
    }
    if (entry.target.id == "icarus" && entry.isIntersecting) {
      console.log(entry.target);
      document.getElementById("nav-icarus").classList.add("active");
      document.getElementById("nav-team").classList.remove("active");
      document.getElementById("nav-contact").classList.remove("active");
    }
  });
});

const hiddenElements = document.querySelectorAll(".observed");
hiddenElements.forEach((el) => observer.observe(el));
