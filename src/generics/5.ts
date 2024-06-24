export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// Приклад використання
console.log(RoleDescription.admin); // Виведе: Admin User
console.log(RoleDescription.editor); // Виведе: Editor User
console.log(RoleDescription.guest); // Виведе: Guest User
