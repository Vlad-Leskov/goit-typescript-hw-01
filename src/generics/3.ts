function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// Приклад використання функції merge з типізацією
const obj1 = { name: "Object1", value: 10 };
const obj2 = { age: 30, active: true };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);
