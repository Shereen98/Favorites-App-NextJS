export async function getAllProducts() {
  const response = await fetch("/api/products");
  return await response.json();
}
