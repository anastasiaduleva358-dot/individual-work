import { events } from "./data.js";
import { validateForm } from "./validation.js";
import { renderEvents } from "./ui.js";

const form = document.getElementById("eventForm");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");

const eventsList = document.getElementById("eventsList");
const errorMessage = document.getElementById("errorMessage");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const sortBtn = document.getElementById("sortBtn");

let editId = null;

renderEvents(events, eventsList);

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = titleInput.value;
    const date = dateInput.value;
    const category = categoryInput.value;
    const description = descriptionInput.value;

    const error = validateForm(title, date, category);

    if (error !== "") {
        errorMessage.textContent = error;
        return;
    }

    errorMessage.textContent = "";

    if (editId) {

        const currentEvent = events.find(item => item.id === editId);

        currentEvent.title = title;
        currentEvent.date = date;
        currentEvent.category = category;
        currentEvent.description = description;

        editId = null;

    } else {

        const newEvent = {
            id: Date.now(),
            title,
            date,
            category,
            description
        };

        events.push(newEvent);
    }

    renderEvents(events, eventsList);

    form.reset();
});

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchValue)
    );

    renderEvents(filteredEvents, eventsList);
});

filterCategory.addEventListener("change", () => {

    const selectedCategory = filterCategory.value;

    if (selectedCategory === "all") {
        renderEvents(events, eventsList);
        return;
    }

    const filteredEvents = events.filter(event =>
        event.category === selectedCategory
    );

    renderEvents(filteredEvents, eventsList);
});

sortBtn.addEventListener("click", () => {

    events.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    renderEvents(events, eventsList);
});

eventsList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {

        const id = Number(event.target.dataset.id);

        const index = events.findIndex(item => item.id === id);

        events.splice(index, 1);

        renderEvents(events, eventsList);
    }

    if (event.target.classList.contains("edit-btn")) {

        const id = Number(event.target.dataset.id);

        const currentEvent = events.find(item => item.id === id);

        titleInput.value = currentEvent.title;
        dateInput.value = currentEvent.date;
        categoryInput.value = currentEvent.category;
        descriptionInput.value = currentEvent.description;

        editId = id;
    }
});