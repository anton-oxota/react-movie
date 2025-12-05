export function getSortByFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("sortBy");
}

export function getPageFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("page") || 1;
}

export function getGenresFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("genres")?.split(" ") || [];
}
