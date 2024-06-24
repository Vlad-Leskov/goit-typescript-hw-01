// Змінна, яка може містити або рядок, або число
let variable: string | number;
variable = "Hello"; // Коректно
variable = 42; // Коректно

// Змінна, яка може містити лише одне з двох можливих рядкових значень
let status: "enable" | "disable";
status = "enable"; // Коректно
status = "disable"; // Коректно

// status = 'other'; // Помилка: Значення не відповідає дозволеним значенням 'enable' або 'disable'
