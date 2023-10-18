/**
 * Maximum allowed counter value.
 * Minimum allowed counter value.
 * Amount to increment or decrement the counter.
 * @type {number}
 */

const MAX_NUMBER = 10;
const MIN_NUMBER = 0;
const STEP_AMOUNT = 1;

/**
 * @type {HTMLInputElement} - The counter input element.
 * @type {HTMLButtonElement} - The Subtract button element.
 * @type {HTMLButtonElement} - The Add button element.
 * @type {HTMLElement} - The popup element.

 */

const number = document.querySelector('[data-number-input]');
const subtract = document.querySelector('[data-subtract-sign]');
const add = document.querySelector('[data-add-sign]');
const reset = document.querySelector('[data-reset-input]');
const popup = document.getElementById('popup');

/**
 * Handles subtract button click.
 * It decrements the counter by 1.
 * When you reach 0 (Minimum number), the subtract button is dissabled.
 */

const subtractHandler = () => {
    const currentValue = parseInt(number.value);
    
    if (currentValue > MIN_NUMBER) {
        const newValue = currentValue - STEP_AMOUNT;
        number.value = newValue;

        if (newValue <= MIN_NUMBER) {
            subtract.disabled = true;
        }
        
        if (add.disabled) {
            add.disabled = false;
        }
    }
};

/**
 * Handles add button click.
 * It increments the counter by 1.
 * When you reach 10 (Max number) the add button is dissabled.
 */

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
    }

    if (subtract.disabled) {
        subtract.disabled = false;
    }
};

/**
 * Handles reset button click and displays the popup message.
 */

const resetHandler = () => {
    number.value = '0';
    subtract.disabled = false;
    add.disabled = false;
    displayPopup();
};

/**
 * This function displays the popup message and hides it after 5 seconds.
 */

const displayPopup = () => {
    popup.style.display = 'block';

    setTimeout(() => {
        hidePopup();
    }, 5000);
};

/**
 * Function to hide the popup message.
 */

const hidePopup = () => {
    popup.style.display = 'none';
};

// Event listeners
reset.addEventListener('click', resetHandler);
add.addEventListener('click', addHandler);
subtract.addEventListener('click', subtractHandler);
