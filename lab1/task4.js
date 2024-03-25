function calculatePrice(groupType, numberOfPeople, dayOfWeek) {
    var pricePerPerson = 0;

    // price for one person
    switch (groupType) {
        case "Students":
            // yea I love ternary expressions :)
            // DSP one-love
            pricePerPerson = (dayOfWeek === "Friday") ? 8.45 :
                (dayOfWeek === "Saturday") ? 9.80 : 10.46;
            break;
        case "Corporate":
            pricePerPerson = (dayOfWeek === "Friday") ? 10.90 :
                (dayOfWeek === "Saturday") ? 15.60 : 16;
            break;
        case "Regular":
            pricePerPerson = (dayOfWeek === "Friday") ? 15 :
                (dayOfWeek === "Saturday") ? 20 : 22.50;
            break;
        default:
            console.log("Group type is illegal.");
            return;
    }

    // price without discounts
    var totalPrice = pricePerPerson * numberOfPeople;

    // applying discounts
    if (groupType === "Students" && numberOfPeople >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === "Corporate" && numberOfPeople >= 100) {
        totalPrice -= (10 * pricePerPerson); // 10 persons are free pass
    } else if (groupType === "Regular" && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    // round
    console.log("Total price: " + totalPrice.toFixed(2));
}

calculatePrice("Students", 30, "Sunday");
calculatePrice("Corporate", 120, "Суббота");
calculatePrice("Regular", 40, "Saturday");