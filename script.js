//! Active Navigation Link

const currentPage =
  window.location.pathname.split("/").pop() || "index.html";


document.querySelectorAll(".nav-links a").forEach((link) => {

  const linkPage =
    new URL(link.href).pathname.split("/").pop();


  if (currentPage === linkPage) {

    link.classList.add("active");

  } else {

    link.classList.remove("active");

  }

});




//! Navbar Glass Effect On Scroll

const navbar = document.querySelector(".navbar");


function navbarScroll() {

  if (window.scrollY > 30) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

}


window.addEventListener("scroll", navbarScroll);


navbarScroll();




//! Mobile Menu Toggle

const menuToggle =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



if (menuToggle) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.classList.toggle("open");

  });

}





// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuToggle.classList.remove("open");

  });

});
