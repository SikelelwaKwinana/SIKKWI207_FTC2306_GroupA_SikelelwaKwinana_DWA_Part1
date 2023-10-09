// scripts.js

/**
 * This event listener handles the form submission for whole number division.
 *
 * @param {Event} event - The form submission event.
 * It retrieves the dividend and divider values from the form fields.
 * It validates that input is not empty, numeric, or not a negative value.
 * If not it displays an appropriate error message.
 * If conditions are met, it performs the whole number division using `Math.floor()` and displays the result.
 * Finally, it logs any errors with call stacks to the console.
 */
const handleSubmit = (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
  } else if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML =
      "Something critical went wrong. Please reload the page";
    console.error(new Error("You can only used numbers."));
  } else if (divider < 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again.";
    console.error(new Error("Invalid number provided."));
  } else {
    const sum = Math.floor(dividend / divider);
    result.innerText = sum;
  }
};

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", handleSubmit);