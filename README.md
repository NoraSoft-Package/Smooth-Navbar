# Monster-Smooth-Navbar

<p>This Navbar is the second navbar in this library</p>
<p>this navbar is good in smoothly and css codes is less and very shortcut</p>

## For What ?

<p>for websites that don't need many features in navbar like many dropdown</p>

## Some tips for using this navbar

<ul>
    <li>Don't use this navbar if you want many dropdown menu</li>
    <li>Don't use more than 2 dropdown menus in this navbar </li>
    <li>This navbar is very simple and the css codes is contract for simple uses</li>
</ul>

## The Navbar v1

<a href="https://imgbb.com/"><img src="https://ibb.co/mNwtR9Z" alt="ezgif-com-gif-maker" border="0"></a>

## The Links is

```html
<link rel="stylesheet" href="style/smooth-navbar.css" />
<script defer src="js/navbar.js"></script>
```

## HTML

<details>
<summary>HTML</summary>
<p>

```html
<nav>
  <!-- For Hamburger Menu -->
  <div class="hamburger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <!-- The Logo -->
  <ul class="logo">
    <li><a href="#">Contact</a></li>
  </ul>
  <!-- The links of the navbar -->
  <ul class="nav-links">
    <!-- main-link for just the link that have dropdown menu -->
    <li class="main-link">
      <a>About</a>
      <div class="before-sub-links">
        <ul class="sub-links">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
        </ul>
      </div>
    </li>
    <!-- main-link for just the link that have dropdown menu -->
    <li class="main-link">
      <a>About</a>
      <!-- before-sub-links for get the height of the links when hide and show them -->
      <div class="before-sub-links">
        <!-- sub-links is the dropdown parent links -->
        <ul class="sub-links">
          <!-- the links of the dropdown -->
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">JS</a></li>
        </ul>
      </div>
    </li>
    <!-- some links without dropdown menu -->
    <li><a href="#">Contact</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Projects</a></li>
  </ul>
</nav>
```

</p>
</details>

## JSX

<details>
<summary>JSX</summary>
<p>

```jsx
<nav>
  <div className="hamburger">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
  <ul className="logo">
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
  <ul className="nav-links">
    <li className="main-link">
      <a>About</a>
      <div className="before-sub-links">
        <ul className="sub-links">
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
        </ul>
      </div>
    </li>
    <li className="main-link">
      <a>About</a>
      <div className="before-sub-links">
        <ul className="sub-links">
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
          <li>
            <a href="#">JS</a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
    <li>
      <a href="#">Projects</a>
    </li>
    <li>
      <a href="#">Projects</a>
    </li>
    <li>
      <a href="#">Projects</a>
    </li>
  </ul>
</nav>
```

</p>
</details>

## CSS

<p>This is CSS codes if you want SCSS don't take this codes and go down</p>
<details>
<summary>CSS</summary>
<p>

```css
@media screen and (max-width: 768px) {
  nav {
    position: relative;
    height: 15vh !important;
    display: block !important;
  }
  nav .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  nav .hamburger {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 201;
  }
  nav .hamburger .line {
    width: 30px;
    height: 3px;
    background: #fff;
    margin: 5px;
  }
  nav .nav-links {
    position: fixed;
    z-index: 200;
    background: #22223b;
    height: 100vh !important;
    width: 100% !important;
    flex-direction: column !important;
    -webkit-clip-path: circle(100px at 90% -20%);
    clip-path: circle(100px at 90% -20%);
    transition: all 1s ease-out;
    pointer-events: none;
  }
  nav .nav-links .sub-links {
    top: 2rem !important;
    left: -2rem !important;
  }
  nav .nav-links li {
    opacity: 0;
  }
  nav .nav-links li a {
    font-size: 25px;
  }
  nav .nav-links li.fade {
    opacity: 1;
  }
  nav .nav-links.open {
    -webkit-clip-path: circle(1000px at 90% -20%);
    clip-path: circle(1000px at 90% -20%);
    pointer-events: all;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  height: 10vh;
  background: #22223b;
}
nav .nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  width: 50%;
  height: 100%;
  margin-left: auto;
}
nav .nav-links li,
nav .nav-links .main-link {
  position: relative;
  align-items: center;
  align-items: start;
}
nav .nav-links li a,
nav .nav-links .main-link a {
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 30px;
}
nav .nav-links li .before-sub-links .sub-links,
nav .nav-links .main-link .before-sub-links .sub-links {
  background: #22223b;
  position: absolute;
  top: 2.8rem;
  left: 0rem;
  width: 8rem;
  padding: 0rem 1rem;
  border-radius: 0.25rem;
  list-style: none;
  transition: 0.3s;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
nav .nav-links li .before-sub-links .sub-links li,
nav .nav-links .main-link .before-sub-links .sub-links li {
  margin: 1rem 0;
  font-size: 1rem;
}
nav .nav-links .main-link:hover .sub-links {
  pointer-events: all;
  opacity: 1;
}
nav .logo {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
}
nav .logo li {
  margin-left: 1rem;
  list-style: none;
  z-index: 201;
  position: relative;
  align-items: center;
  align-items: start;
}
nav .logo li a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  padding-bottom: 30px;
}
nav .logo li:hover {
  border-bottom: none;
}
nav li {
  transition: all 0.2s !important;
}
nav li:hover {
  border-bottom: 1px solid #e71d36;
}
```

</p>
</details>

## JavaScript

<details>
<summary>JavaScript</summary>
<p>

```js
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
```

</p>
</details>
