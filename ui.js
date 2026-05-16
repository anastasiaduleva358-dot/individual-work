export function renderEvents(events, container) {

    container.innerHTML = "";

    if (events.length === 0) {
        container.innerHTML = "<p>События не найдены</p>";
        return;
    }

    events.forEach(event => {

        const card = document.createElement("div");
        card.classList.add("event-card");

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Дата:</strong> ${event.date}</p>
            <p><strong>Категория:</strong> ${event.category}</p>
            <p>${event.description}</p>

            <div class="card-buttons">
                <button class="edit-btn" data-id="${event.id}">
                    Редактировать
                </button>

                <button class="delete-btn" data-id="${event.id}">
                    Удалить
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}