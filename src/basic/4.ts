// Функція, що виводить повідомлення в консоль
function showMessage(message: string): void {
  console.log(message);
}

// Функція, що обчислює суму двох чисел
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, що кидає помилку
function customError(): never {
  throw new Error("Error");
}
