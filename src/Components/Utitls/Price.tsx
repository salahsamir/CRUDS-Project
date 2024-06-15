function formatPrice(price) {
    let priceStr = price.toString();

    // Reverse the string to simplify adding commas and periods
    let reversedPriceStr = priceStr.split('').reverse().join('');

    // Initialize an empty array to hold the formatted characters
    let formattedPriceReversed = [];

    // Iterate over the reversed string and add commas and periods accordingly
    for (let i = 0; i < reversedPriceStr.length; i++) {
        if (i == 2) {
            formattedPriceReversed.push('.');
        } else if (i > 2 && (i - 2) % 3 === 0) {
            formattedPriceReversed.push('.');
        }
        formattedPriceReversed.push(reversedPriceStr[i]);
    }

    // Reverse the result array back to the original order and join to form the final string
    let formattedPrice = formattedPriceReversed.reverse().join('');

    return formattedPrice;
}

export default formatPrice;
