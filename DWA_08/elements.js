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
