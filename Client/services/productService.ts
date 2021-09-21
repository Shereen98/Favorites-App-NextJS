import { server } from "../config";

export async function getAllProducts() {
  const response = await fetch(`${server}/api/products`);
  return await response.json();
}
