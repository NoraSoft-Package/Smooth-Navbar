const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// when click on hamburger menu
hamburger.addEventListener("click", (eo) => {
  // open navbar
  navLinks.classList.toggle("open");
  // for make the show of links is good
  let i = 2;
  links.forEach((link) => {
    link.style.transition = `all 0.5s ease 0.${i}s`;
    link.classList.toggle("fade");
    i = i + 2;
  });
});

// for sublinks in mobile phones
const mainLinks = document.querySelectorAll(".main-link");
mainLinks.forEach((link) => {
  const beforeSubLinks = link.querySelector(".before-sub-links");
  const subLinks = beforeSubLinks.querySelector(".sub-links");
  const subLinksHeight = subLinks.clientHeight;

  // this function for open and close sub links
  // this function for check if the screen is phone or no to prevent errors
  // [type] param is for check if the coming is mouseenter || mouseleave
  const styling = (type) => {
    const media = window.matchMedia("(max-width: 768px)"); // the media
    if (media.matches) {
      if (type === "open") {
        beforeSubLinks.style.height = `${subLinksHeight}px`;
      } else {
        beforeSubLinks.style.height = 0;
      }
    }
  };

  link.addEventListener("mouseenter", () => {
    // call styling function for open the sub-links
    styling("open");
  });
  link.addEventListener("mouseleave", () => {
    // call styling function for close the sub-links
    styling("close");
  });
});
