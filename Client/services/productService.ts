import { server } from "../config";

//fetch products from backend
export async function getAllProducts() {
  const response = await fetch(`${server}/api/products`);
  return await response.json();
}
