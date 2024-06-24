import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Приклад використання функції fetchData з типізацією
interface UserData {
  id: number;
  name: string;
  email: string;
}

async function getUserData() {
  const url = "https://api.example.com/user";
  const data = await fetchData<UserData>(url);
  console.log(data); // data буде типу UserData
}
