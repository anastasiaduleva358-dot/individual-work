# Планировщик расписания

## Автор

- Анастасия Дулева

---

# Описание проекта

Планировщик расписания - это веб-приложение, разработанное с использованием Vanilla JavaScript.

Цель проекта - создание удобного интерфейса для управления событиями и задачами. Пользователь может добавлять, редактировать, удалять, искать и фильтровать события.

Проект демонстрирует навыки работы с DOM, событиями, массивами объектов и модульной структурой JavaScript.

---

# Основные функции

- Добавление событий
- Редактирование событий
- Удаление событий
- Поиск событий по названию
- Фильтрация по категории
- Сортировка по дате
- Валидация пользовательского ввода
- Адаптивный интерфейс

---

# Используемые технологии

- HTML5
- CSS3
- JavaScript ES6+

---

# Структура проекта

```text
schedule-planner/
│
├── index.html
├── style.css
├── README.md
│
└── js/
    ├── app.js
    ├── data.js
    ├── ui.js
    └── validation.js
```

---

# Инструкция по запуску

1. Скачать проект.

2. Открыть папку проекта в Visual Studio Code.

3. Установить расширение Live Server.

4. Открыть файл index.html.

5. Нажать:

```text
Open with Live Server
```

После этого приложение откроется в браузере.

---

# Примеры использования

## Главная страница

<img width="932" height="784" alt="image" src="https://github.com/user-attachments/assets/3358d3fc-9d7b-4e51-bd67-b4544298b346" />


## Добавление события

Пользователь вводит:

- название события;
- дату;
- категорию;
- описание.

  <img width="852" height="601" alt="image" src="https://github.com/user-attachments/assets/10224ab6-e21e-414a-8c32-c7279ae2895a" />

```
const newEvent = {
    id: Date.now(),
    title,
    date,
    category,
    description
};

events.push(newEvent);
```

После нажатия кнопки событие отображается в списке.

## Фильтрация

Пользователь может отфильтровать события по категории.

<img width="871" height="440" alt="image" src="https://github.com/user-attachments/assets/7f3e5d05-7451-4e82-ab54-9d8f017011f0" />

```
const filteredEvents = events.filter(event =>
    event.category === selectedCategory
);
```

## Поиск

Реализован поиск событий по названию.

<img width="824" height="426" alt="image" src="https://github.com/user-attachments/assets/36f4d4fa-400f-4861-9bd0-03fa699ec0fe" />

## Валидация формы

```javascript
if (title.trim() === "") {
    return "Введите название события";
}
```

---

# Использованные источники

- https://elearning.usm.md/course/view.php?id=6455
- https://javascript.info/
- https://www.w3schools.com/


Проект разработан без использования сторонних JavaScript-фреймворков.

В приложении используется модульная структура файлов и современный синтаксис ES6+.
