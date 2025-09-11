export async function fetchArtwork(page = 1, limit = 6) {
    const results = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`)
    const data = await results.json()

    return data.data;
};