const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchRandomPhotos(page = 1, limit = 3) {
  const results = await fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=${limit}&client_id=${ACCESS_KEY}`
  );
  const photo = await results.json();

  return photo;
}

export async function fetchPhotoDetails(id) {
  const results = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${
      import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    }`
  );
  const imageDetails = await results.json();

  return imageDetails;
}
