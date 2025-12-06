export function scrollToElement<T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    offset?: number,
) {
    const element = ref.current;

    if (!element) return;

    const { y } = element.getBoundingClientRect();
    window.scrollBy({
        top: y - (offset || 0),
        behavior: "auto",
    });
}
