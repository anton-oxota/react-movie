export function getSortByFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("sortby");
}
