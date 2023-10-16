import { htmlElements } from "./elements.js";


/**
 * Theme variables for the application.
 * @typedef {Object} Themes
 * @property {string[]} day - Colors for the "day" theme.
 * @property {string[]} night - Colors for the "night" theme.
 */
const themes = {

  day: ["255, 255, 255", "10, 10, 20"],
  night: ["10, 10, 20", "255, 255, 255"],
};

const changeTheme = () => {
    
          if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ) {
            htmlElements.settings.theme.value = "night";
          } else {
            htmlElements.settings.theme.value = "day";
          }
        };

changeTheme();
htmlElements.settings.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formSubmit = new FormData(event.target);
  const submit = Object.fromEntries(formSubmit);

  document.documentElement.style.setProperty(
    "--color-light",
    themes[submit.theme][0]
  );
  document.documentElement.style.setProperty(
    "--color-dark",
    themes[submit.theme][1]
  );

  // Close the settings modal after saving
  htmlElements.settings.overlay.close();
});

// Opens settings and focuses on themes
htmlElements.header.settings.addEventListener("click", () => {
  htmlElements.settings.theme.focus();
  htmlElements.settings.overlay.showModal();
});

// Add event listener for cancel button
htmlElements.settings.cancel.addEventListener("click", () => {
  htmlElements.settings.overlay.close();
});


