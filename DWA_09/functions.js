import { BOOKS_PER_PAGE, authors, books, genres } from "./data.js";
import { htmlElements } from "./elements.js";

const extracted = books.slice(0, BOOKS_PER_PAGE);

let totalBooksShown = 0;

/**
 * Creates an HTML container for displaying a book with its picture, title, and author.
 *
 * @param {book} book - The book object to display.
 * @returns {HTMLElement} - The HTML container for the book.
 * Populate the book container with HTML content
 * Add Event listener to show the book's details when the page loads.
 */

/**
 * Creates an HTML container for displaying a book with its picture, title, and author.
 *
 * @param {book} book - The book object to display.
 * @returns {HTMLElement} - The HTML container for the book.
 * Populate the book container with HTML content
 * Add Event listener to show the book's details when the page loads.
 */

const displayBookWithElements = (book) => {
  const { author, id, image, title } = book;
  const authorName = authors[author];

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  bookContainer.className = "preview";

  bookContainer.addEventListener("click", () => {
    const bookDetails = new BookDetails(book);
    bookDetails.display();
  });

  bookContainer.dataset.id = id;

  bookContainer.innerHTML = /* html */ `
             <img
                 class="preview__image"
                 src="${image}"
             />
            
            <div class="preview__info">
                 <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authorName}</div>
                
            </div>
         `;
  return bookContainer;
};

/**
 * This is a class to display book details in a modal overlay.
 */
class BookDetails {
  /**
   * Creates an instance of the BookDetails class.
   *
   * @param {object} data - The book data to display.
   */

  constructor(data) {
    this.image = data.image;
    this.title = data.title;
    this.author = data.author;
    this.published = data.published;
    this.description = data.description;
  }
  /**
   * Display the book details in a modal overlay.
   * Extract only the year from the published date.
   * Set the image source, title, author, and description.
   * Open overlay and set event listner for the close button.
   */
  display() {
    const publishedDate = new Date(this.published);
    const year = publishedDate.getFullYear();

    htmlElements.preview.image.src = this.image;
    htmlElements.preview.title.textContent = this.title;
    htmlElements.preview.subtitle.textContent = `${
      authors[this.author]
    } (${year})`;
    htmlElements.preview.description.textContent = this.description;
    // Open the modal overlay
    htmlElements.preview.overlay.showModal();

    htmlElements.preview.close.addEventListener("click", () => {
      htmlElements.preview.overlay.close();
    });
  }
}

/**
//  * Displays books in the main container based on the current genre and pagination.
//  */

const displayAllBooks = () => {
  htmlElements.main.items.innerHTML = "";

  // Calculate the remaining books to show based on the current genre
  const genreId = htmlElements.search.genre.value;
  const filteredBooks = books.filter((book) => {
    const bookGenres = book.genres.map((genreId) =>
      genres[genreId].toLowerCase()
    );
    return genreId === "" || bookGenres.includes(genres[genreId].toLowerCase());
  });

  // Calculate the remaining books to show
  const remainingBooks = filteredBooks.length - totalBooksShown;
  const booksToDisplay = Math.min(remainingBooks, BOOKS_PER_PAGE);

  // Loop through extracted books and display each one
  for (let i = totalBooksShown; i < totalBooksShown + booksToDisplay; i++) {
    const book = filteredBooks[i];

    // Break if there are no more books to display
    if (!book) break;
    const bookElement = displayBookWithElements(book);
    htmlElements.main.items.appendChild(bookElement);
  }

  // Update the total number of books shown
  totalBooksShown += booksToDisplay;

  // Update the "Show more" button text
  htmlElements.main.button.innerText = `Show more (${
    remainingBooks - booksToDisplay
  })`;

  // Disable the "Show more" button if there are no more books to show
  if (remainingBooks - booksToDisplay <= 0) {
    htmlElements.main.button.disabled = true;
  }
};

/**
 * Opens the search overlay and optionally resets search fields.
 */
const openSearchOverlay = () => {
  htmlElements.search.title.value = "";
  htmlElements.search.genre.value = "";
  htmlElements.search.author.value = "";

  // Show the search overlay
  htmlElements.search.overlay.style.display = "block";
};

// This event listener opens the search overlay when a button is clicked
htmlElements.header.search.addEventListener("click", openSearchOverlay);

// an event listener to focus on the search input when overlay opens.
htmlElements.header.search.addEventListener("click", () => {
  htmlElements.search.search.focus();
  htmlElements.search.overlay.showModal();
});
//An event listener to close the search overlay when the search button is clicked
htmlElements.search.search.addEventListener("click", () => {
  htmlElements.search.overlay.close();
});

/**
 * Closes the search overlay and hide it.
 */
const closeSearchOverlay = () => {
  htmlElements.search.overlay.style.display = "none";
};
htmlElements.search.cancel.addEventListener("click", closeSearchOverlay);

// Event listener to close the search overlay when the search input is clicked
htmlElements.search.cancel.addEventListener("click", () => {
  htmlElements.search.overlay.close();
});
/**
 * Get the search input values and filter and display books based on search criteria.
 */
const filterBooks = () => {
  const title = htmlElements.search.title.value.toLowerCase();
  const genreId = htmlElements.search.genre.value;
  const author = htmlElements.search.author.value.toLowerCase();

  const filteredBooks = books.filter((book) => {
    const bookTitle = book.title.toLowerCase();
    const bookGenres = book.genres.map((genreId) =>
      genres[genreId].toLowerCase()
    );
    const bookAuthor = book.author.toLowerCase();
    const isGenreMatch =
      genreId === "" || bookGenres.includes(genres[genreId].toLowerCase());

    return (
      bookTitle.includes(title) && isGenreMatch && bookAuthor.includes(author)
    );
  });

  // Update the extracted books with the filtered books
  extracted.length = 0;
  Array.prototype.push.apply(extracted, filteredBooks.slice(0, BOOKS_PER_PAGE));
  totalBooksShown = BOOKS_PER_PAGE;

  // Clear the existing book list before displaying filtered books
  htmlElements.main.items.innerHTML = "";

  // Display the filtered books
  for (let i = 0; i < BOOKS_PER_PAGE; i++) {
    const book = extracted[i];
    if (!book) break;
    const bookElement = displayBookWithElements(book);
    htmlElements.main.items.appendChild(bookElement);
  }

  // Update the "Show more" button text
  const remainingBooks = filteredBooks.length - totalBooksShown;
  const buttonText = `Show more (${remainingBooks > 0 ? remainingBooks : 0})`;
  htmlElements.main.button.innerText = buttonText;

  // Disable the "Show more" button if there are no more books to show
  htmlElements.main.button.disabled = remainingBooks <= 0;

  // Close the search overlay after filtering (optional)
  htmlElements.search.overlay.style.display = "none";
};

// Event listener to trigger the filterBooks function when the search button is clicked
htmlElements.search.search.addEventListener("click", (event) => {
  event.preventDefault();
  filterBooks();
});
const populateAuthorOptions = () => {
  const authorSelect = htmlElements.search.author;
  authorSelect.innerHTML = '<option value="">All Authors</option>';
  for (const authorId in authors) {
    if (authors.hasOwnProperty(authorId)) {
      const authorName = authors[authorId];
      const option = document.createElement("option");
      option.value = authorId;
      option.textContent = authorName;
      authorSelect.appendChild(option);
    }
  }
};
// Call the function to populate genre options
populateAuthorOptions();

//Function to populate the genre select element
export const populateGenreOptions = () => {
  const genreSelect = htmlElements.search.genre;
  genreSelect.innerHTML = '<option value="">All Genres</option>';

  for (const genreId in genres) {
    if (genres.hasOwnProperty(genreId)) {
      const genreName = genres[genreId];
      const option = document.createElement("option");
      option.value = genreId;
      option.textContent = genreName;
      genreSelect.appendChild(option);
    }
  }
};

// Call the function to populate genre and author options
populateGenreOptions();

// Add an event listener to trigger displaying all books when needed
htmlElements.main.button.addEventListener("click", displayAllBooks);

// Initially, display the books when the page loads
displayAllBooks();
