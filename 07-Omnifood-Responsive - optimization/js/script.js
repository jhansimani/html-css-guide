const year = document.querySelector(".year");

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const buttonNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
buttonNav.addEventListener("click", function () {
  
  header.classList.toggle("nav-open");

});

/* smooth scroll implementation */

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    /* scroll back to top */
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    /* scroll  to other links */
    if (href != "#" && href.startsWith("#")) {
      const scrollEle = document.querySelector(href);
      scrollEle.scrollIntoView({
        behavior: "smooth",
      });
    }
    /* close mobile navigation */
    if (href != "#" && href.startsWith("#")) {
      if (link.classList.contains("main-nav-link")) {
        header.classList.toggle("nav-open");
      }
    }
  });
});

//sticky navigation
const sectionHeroEle = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // view inside of a viewport
    root: null,
    threshold: 0,
    rootMargin:'-80px'
  }
);
obs.observe(sectionHeroEle);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
