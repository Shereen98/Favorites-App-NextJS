export async function getFavoriteProducts() {
  const response = await fetch("/api/favorites");
  return await response.json();
}

export async function addToFavorite(id: string) {
  const response = await fetch("/api/favorites/:" + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function deleteFavorite(id: string) {
  const response = await fetch("/api/favorites/:" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}
