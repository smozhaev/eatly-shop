export const calculatePrice = (price: number, count: number) => {
    const total = price * count;
    const dollars = Math.floor(total);
    const cents = (total % 1).toFixed(2).substring(2);
    return { dollars, cents };
}