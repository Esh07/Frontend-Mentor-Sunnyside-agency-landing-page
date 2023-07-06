# Sunnyside Agency Landing Page
[![image](https://github.com/Esh07/Frontend-Mentor-Sunnyside-agency-landing-page/assets/32418603/a35931ce-666a-4676-bbab-7331f482ba60)](https://www.frontendmentor.io/solutions/used-displayflex-to-handle-responsiveness-of-website-gzwh91GbZ)

## Introduction
Welcome to my repository for the [Sunnyside Agency Landing Page coding challenge](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef)! This project is a part of the Frontend Mentor challenges, which have been designed to help me enhance my coding skills by building realistic projects.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [Js Learning](#javascript-learning)
    - [CSS learning](#css-learning)
- [Result](#result)

## Overview

### The challenge
The challenge is to build a landing page for the Sunnyside agency and make it look as close to the provided design as possible. The focus of this challenge is mostly on HTML and CSS, with a small amount of JavaScript included for the mobile navigation toggle. However, you can also choose to complete the challenge without using JavaScript.

## Requirements 

The website should show:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Solution and submission link](https://www.frontendmentor.io/solutions/used-displayflex-to-handle-responsiveness-of-website-gzwh91GbZ)
- Live Site URL: [Frontend-Mentor-Sunnyside-agency-landing-page/](https://esh07.github.io/Frontend-Mentor-Sunnyside-agency-landing-page/)

## My process

### Built with

- Semantic HTML5 markup (`<header>`, `<nav>`, `<section>`, `<footer>` and `<main>` etc)
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this coding challenge, I had the opportunity to learn and implement various functionalities to enhance the user experience. Here are some of the key aspects I explored:

#### JavaScript learning
<details>
  <summary>Menu Toggle Bar</summary>
  
##### Menu Toggle Bar
To create a mobile menu toggle bar, I utilized event listeners, specifically the click event, to show and hide the menu content. Here's the JavaScript code I used:

```js

//for menu toggle bar - Menu bar on mobile version
var hamBurger = document.getElementById("hamBurger-icon");
var menu = document.getElementById("menu");
//function listen to click event
hamBurger.addEventListener("click", () =>{

    //add "open" in class if not available. second click will be removing "open" from the class.
    hamBurger.classList.toggle("open");
    menu.classList.toggle("menu-active");
});
```
This allowed users to click the hamburger icon to toggle the menu visibility.
</details>

<details>
  
<summary>Adjusting the Navigation Bar on Scroll</summary>

##### Adjusting the Navigation Bar on Scroll
I utilized the `window.onscroll` event listener and `window.pageYOffset` to adjust the navigation bar based on the user's scroll position. The navigation bar behavior included disappearing when scrolling down and reappearing as a sticky bar when scrolling up. Here's an example of the JavaScript code I used:

```js
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(mobile.matches){
        if ((window.pageYOffset) == 0 ){
            navBar.style.padding = "2rem"; navBar.style.background = "transparent";
        }
         else if (prevScrollpos > currentScrollPos){
            navBar.style.paddingTop = "1rem";
            navBar.style.paddingBottom = "1rem";
            navBar.style.backgroundColor = "#4bc9fc";
            navBar.style.top = "0";
        } else{
          navBar.style.top = "-100px";
          navBar.style.paddingTop = "0rem";
          navBar.style.paddingBottom = "0rem";
      }

    }
    else{

    if ((window.pageYOffset) == 0 ){
        navBar.style.padding = "4rem";
        navBar.style.background = "transparent";
    }
     else if (prevScrollpos > currentScrollPos){
        navBar.style.paddingTop = "1rem";
        navBar.style.paddingBottom = "1rem";
        navBar.style.backgroundColor = "#4bc9fc";
        navBar.style.top = "0";
    }
    else
    {
        navBar.style.top = "-100px";
        navBar.style.paddingTop = "0rem";
        navBar.style.paddingBottom = "0rem";
    }
    }

    prevScrollpos = currentScrollPos;
};
```
</details>

<details>
  <summary>Scroll to Top Button</summary>
  
##### Scroll to Top Button
To enhance user navigation, I implemented a scroll-to-top button that becomes visible when the user has scrolled halfway through the page. Here's the JavaScript code for this functionality:

```js
//thanks to css-trick
//for Scroll to top behaviour 
var scrollToTop = document.getElementById("backTotop");
var credits = document.getElementById("credit");
var rootElement = document.documentElement;

function handleScroll(){
    var scrollable = rootElement.scrollHeight - rootElement.clientHeight;

    if ((rootElement.scrollTop /  scrollable) > 0.60 ){
        scrollToTop.classList.add("enable");
        credits.classList.add("show");
    }
    else {
        scrollToTop.classList.remove("enable");
        credit.classList.remove("show");
    }
};

document.addEventListener("scroll", handleScroll);
```
</details>

#### CSS learning
<details>

  <summary>Custom CSS variables</summary>
  
##### Custom CSS Variables 
I learned how to use the `:root` selector to define custom CSS variables, allowing for easier and consistent styling across the project.
```css
:root {
  /* ======--- Colors ---=====*/

  /* Primary */

  --pm-soft-red: hsl(7, 99%, 70%);
  --pm-yellow: hsl(51, 100%, 49%);
  --pm-drk-des-cyan: hsl(167, 40%, 24%);
  --pm-drk-bl: hsl(198, 62%, 26%);
  --pm-drk-cyan: hsl(168, 34%, 41%);

  /* Neutral */
  --nt-vry-drk-des-bl: hsl(212, 27%, 19%);
  --nt-vry-drk-gry-bl: hsl(213, 9%, 39%);
  --nt-drk--gry-bl: hsl(232, 10%, 55%);
  --nt-gry-bl: hsl(210, 4%, 67%);
  --nt-wht: hsl(0, 0%, 100%);

  /* ======--- Typo ---=====*/

  /* body */
  --fs: 18px;

  /* font */
  --ff-1: "Barlow", sans-serif;
  --ff-2: "Fraunces", serif;
}
```
</details>

<details>
  <summary>Smooth Scrolling </summary>
  
##### Smooth Scrolling
By utilizing the `scroll-behavior` property on the HTML element, I achieved smooth scrolling behavior, enhancing the overall user experience.
```css
html {
  scroll-behavior: smooth;
}
```
</details>

<details>
  <summary>CSS Reset</summary>
  
##### CSS Reset
I applied a CSS reset using the universal selector `(*)` to remove default padding, margin, and box-sizing values, ensuring a clean starting point for styling.
```css
/* reset default property */
* {
  padding: 0; /* making sure element has 0 padding as default value*/
  margin: 0; /* making sure element has 0 padding as default value*/
  box-sizing: border-box;
}
```
</details>

<details>
  <summary>Selectors and Typography</summary>
  
##### Selectors and Typography
I gained a deeper understanding of CSS selectors such as `:is()` and used them to define consistent typography styles for various elements like headings, buttons, links, paragraphs, spans, and list items.
```css
:is(p, span, li) {
  font-family: var(--ff-1);
  font-weight: 600;
}
...
:is(h1, h2, h3, h4, h5, h6, .btn, .link) {
  font-family: var(--ff-2);
}
```
</details>

<details>
  <summary>Fixed Navigation Bar</summary>
  
##### Fixed Navigation Bar
I learned how to create a fixed navigation bar that remains at the top of the page using `position: fixed`. I also added transitions and other styles to enhance its appearance.
```css
nav {
  ...
  position: fixed;
  ...
}
```
</details>

<details>
  <summary>Layout and Positioning</summary>
  
##### Layout and Positioning
Through this project, I gained hands-on experience in positioning elements within sections, using relative and absolute positioning to achieve desired layouts.
</details>

<details>
  <summary>Grid Layout</summary>

##### Grid Layout
I utilized the CSS Grid layout to create a visually appealing gallery section with four columns, allowing for a dynamic display of images.
```css
.gallery {
  ...
  display: grid;
  align-items: center;
  grid-template-columns: 25% 25% 25% 25%;
}
```

</details>

## Result
[![image](https://github.com/Esh07/Frontend-Mentor-Sunnyside-agency-landing-page/assets/32418603/b3e5ee66-7e84-4b05-a0e9-7459cbfd5a4c)](https://www.frontendmentor.io/solutions/used-displayflex-to-handle-responsiveness-of-website-gzwh91GbZ)

