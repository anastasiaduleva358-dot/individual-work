export function validateForm(title, date, category) {

    if (title.trim() === "") {
        return "Введите название события";
    }

    if (date === "") {
        return "Выберите дату";
    }

    if (category === "") {
        return "Выберите категорию";
    }

    return "";
}