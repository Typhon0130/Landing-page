import { createGlobalStyle } from "styled-components";
import fontsCss from "./fonts.module.css";

export const GlobalStyles = createGlobalStyle`
${fontsCss} // this works as a normal styled css
/*Box sizing rules*/
*,
*::before,
*::after {
  box-sizing: border-box;
  user-select: none;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.anekMalayalam}, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  line-height: 1;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
a {
  text-decoration: none;
  color: white;
}
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  transition: 0.4s;
}
::-webkit-scrollbar-thumb {
  transition: 0.4s;
  background-color: #784ffe;
}
::-webkit-scrollbar-thumb {
  background-color: #784ffe;
  border-radius: 20px;
  transition: 0.4s;
}
::-webkit-scrollbar-thumb {
  background-color: #784ffe;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
  transition: 0.4s;
}
::-webkit-scrollbar-thumb:hover {
  transition: 0.4s;
  background-color: #3c009d;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
