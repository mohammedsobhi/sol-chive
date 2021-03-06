import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --main-bg-color: #242424;
  --text-color: #fff;
  --dark-text-color: #242424;
  --main-gray-color: #333533;
  --lighter-gray-color: #505250;
  --darker-gray-color: #1c1c1c;
  --main-yellow-color: #f5cb5c;
  --darker-yellow-color: #d1aa40;
  --error-color: #ff7a7a;
  --error-bg-color: #ff7a7a17;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
label {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  color: var(--text-color);
}

body {
  background-color: var(--main-bg-color);
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.btn {
  background-color: var(--main-yellow-color);
  color: var(--dark-text-color);
  border: none;
  border-radius: 6px;
  padding: 4px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
}

.main-button {
  background-color: var(--main-yellow-color);
  color: var(--dark-text-color);
  border: none;
  border-radius: 8px;
  padding: 4px 30px;
  font-size: 20px;
  cursor: pointer;
  transition: ease-in-out 0.2s all;
}

.main-button:hover,
.btn:hover {
  background-color: var(--darker-yellow-color);
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

`;

export default GlobalStyle;
