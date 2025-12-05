export function formatDate(data: string) {
    return new Intl.DateTimeFormat(window.navigator.language, {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(data));
}

export function formatMoney(number: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "usd",
    }).format(number);
}
