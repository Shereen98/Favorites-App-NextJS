import { server } from "../config";

//fetch favorite products
export async function getFavoriteProducts() {
  const response = await fetch(`${server}/api/favorites`);
  return await response.json();
}

//add product to favorites list
export async function addToFavorite(id: string) {
  const response = await fetch(`${server}/api/favorites/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

//remove product from favorites list
export async function deleteFavorite(id: string) {
  const response = await fetch(`${server}/api/favorites/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return await response;
}
