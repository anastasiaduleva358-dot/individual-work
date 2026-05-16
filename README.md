# individual-work
schedule-planner

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
   
3. Открыть папку проекта в Visual Studio Code.

4. Установить расширение Live Server.

5. Открыть файл index.html.

6. Нажать:

```text
Open with Live Server
```

После этого приложение откроется в браузере.

---

# Примеры использования

## Добавление события

Пользователь вводит:

- название события;
- дату;
- категорию;
- описание.

После нажатия кнопки событие отображается в списке.

## Фильтрация

Пользователь может отфильтровать события по категории.

## Поиск

Реализован поиск событий по названию.

---

## Главная страница
<img width="1486" height="776" alt="image" src="https://github.com/user-attachments/assets/9a3766f9-a1ad-4797-b0a2-f191db9d751f" />

## Добавление нового события
<img width="1307" height="641" alt="image" src="https://github.com/user-attachments/assets/3bc4d685-946b-43c0-a03f-5858775c408d" />

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

## Фильтрация по категории (работа)
<img width="1243" height="493" alt="image" src="https://github.com/user-attachments/assets/51a1badd-7469-4316-bd69-ce24857085a9" />

```
const filteredEvents = events.filter(event =>
        event.category === selectedCategory
    );
```

## Валидация формы

```
if (title.trim() === "") {
    return "Введите название события";
}
```

---

# Использованные источники

- https://elearning.usm.md/course/view.php?id=6455
- https://javascript.info/
- https://www.w3schools.com/
