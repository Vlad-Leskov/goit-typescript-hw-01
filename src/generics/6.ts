type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використовуємо Omit<Form, 'errors'> для виключення поля 'errors' з типу Form
type Params = Omit<Form, "errors">;

// Приклад використання
let params: Params = {
  email: "example@mail.com",
  firstName: "John",
  lastName: "Doe",
  phone: "1234567890",
};

console.log(params);
