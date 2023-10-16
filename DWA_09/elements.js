/**
 * This object gets and houses all the HTML elements used in this file for easy access.
 *
 * @typedef {Object} HTMLElements
 * @property {Object} header - HTML elements related to the header.
 * @property {Object} main - HTML elements related to the main content.
 * @property {Object} preview - HTML elements for book previews.
 * @property {Object} search - HTML elements for the search overlay.
 * @property {Object} settings - HTML elements for the settings overlay.
 */

export const htmlElements = {
  header: {
    search: document.querySelector("[data-header-search]"),
    settings: document.querySelector("[data-header-settings]"),
  },
  main: {
    items: document.querySelector("[data-list-items]"),
    message: document.querySelector("[data-list-message]"),
    button: document.querySelector("[data-list-button]"),
  },
  preview: {
    overlay: document.querySelector("[data-list-active]"),
    blur: document.querySelector("[data-list-blur]"),
    image: document.querySelector("[data-list-image]"),
    title: document.querySelector("[data-list-title]"),
    subtitle: document.querySelector("[data-list-subtitle]"),
    description: document.querySelector("[data-list-description]"),
    close: document.querySelector("[data-list-close]"),
  },
  search: {
    overlay: document.querySelector("[data-search-overlay]"),
    form: document.querySelector("[data-search-form]"),
    title: document.querySelector("[data-search-title]"),
    genre: document.querySelector("[data-search-genres]"),
    author: document.querySelector("[data-search-authors]"),
    cancel: document.querySelector("[data-search-cancel]"),
    search: document.querySelector(
      "button.overlay__button.overlay__button_primary[form='search']"
    ),
  },
  settings: {
    overlay: document.querySelector("[data-settings-overlay]"),
    form: document.querySelector("[data-settings-form]"),
    theme: document.querySelector("[data-settings-theme]"),
    save: document.querySelector(
      "button.overlay__button.overlay__button_primary[form='settings']"
    ),
    cancel: document.querySelector("[data-settings-cancel]"),
  },
};

// /**
//  * Fetches and displays search results.
//  *
//  * @param {string} searchTerm - The search term entered by the user.
//  */
// export async function fetchSearchResults(searchTerm) {
//   // Replace this with your actual search logic
//   try {
//       // Fetch search results based on the searchTerm
//       const searchResults = await fetchSearchResultsFromAPI(searchTerm);

//       // Render the results in the main content
//       renderSearchResults(searchResults);
//   } catch (error) {
//       console.error('Error fetching search results:', error);
//       // Handle errors or display a message to the user
//   }
// }

// /**
//  * Fetches search results from the API.
//  *
//  * @param {string} searchTerm - The search term entered by the user.
//  * @returns {Promise} A promise that resolves to the search results.
//  */
// async function fetchSearchResultsFromAPI(searchTerm) {
//   // Replace this with your actual API request logic
//   const apiUrl = `https://api.example.com/search?q=${searchTerm}`;
//   const response = await fetch(apiUrl);

//   if (!response.ok) {
//       throw new Error('Search request failed');
//   }

//   const data = await response.json();
//   return data.results; // Adjust this based on your API response structure
// }
// /**
//  * Renders the search results in the main content.
//  *
//  * @param {Array} results - An array of search results to display.
//  */
// function renderSearchResults(results) {
//   const itemsContainer = htmlElements.main.items;

//   // Clear any previous search results
//   itemsContainer.innerHTML = '';

//   if (results.length > 0) {
//       // Loop through the results and create HTML elements to display them
//       results.forEach((result) => {
//           const itemElement = createItemElement(result);
//           itemsContainer.appendChild(itemElement);
//       });
//       // Hide the "No results found" message if it's visible
//       htmlElements.main.message.style.display = 'none';
//   } else {
//       // Display a message if no results were found
//       htmlElements.main.message.style.display = 'block';
//   }
// }
// /**
//  * Creates an HTML element for a single search result item.
//  *
//  * @param {Object} result - The search result item.
//  * @returns {HTMLElement} The HTML element representing the item.
//  */
// function createItemElement(result) {
//   const itemElement = document.createElement('div');
//   itemElement.classList.add('list__item');

//   // Create and set content for the item element (e.g., title, author, description)
//   // Replace this with your own structure
//   // Example:
//   const titleElement = document.createElement('h2');
//   titleElement.textContent = result.title;
//   itemElement.appendChild(titleElement);

//   const authorElement = document.createElement('p');
//   authorElement.textContent = `Author: ${result.author}`;
//   itemElement.appendChild(authorElement);

//   // Add event listeners or interactions for each item if needed

//   return itemElement;
// }
// /**
//  * Handles the form submission when the user submits a search.
//  *
//  * @param {Event} event - The form submission event.
//  */
// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   const searchTerm = htmlElements.search.title.value;
//   fetchSearchResults(searchTerm);
// }
// // Add an event listener for the search form submission
// htmlElements.search.form.addEventListener('submit', handleSearchFormSubmit);
