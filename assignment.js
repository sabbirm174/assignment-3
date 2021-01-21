
// ---------------- start-kilometerToMeter ---------------- //
function kilometerToMeter(km) {
    let met = 1;
    if (km >= 0) {
        met = 1000 * km;    // 1 km = 1000m
    } else {
        return "invalied kilometer";
    }
    return met;
}
// ---------------- End-kilometerToMeter ---------------- //

// ---------------- start-budgetCalculator ---------------- //
function budgetCalculator(watch, phone, laptop) {
    let totalPrice = 0;
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        const watchPrice = watch * 50;      //watch price 50
        const phonePrice = phone * 100;     //phone price 100
        const laptopPrice = laptop * 500;   //laptop price 500
        totalPrice = watchPrice + phonePrice + laptopPrice;
    } else {
        return "wrong input value"
    }
    return totalPrice;
}
// ---------------- End-budgetCalculator ---------------- //

// ---------------- Start-hotelCost ---------------- //

function hotelCost(days) {
    let totalCost = 0;
    if (days >= 0) {
        if (days <= 10) { // first ten days
            totalCost = days * 100; // first ten days result
        } else if (days <= 20) { // second ten days
            const firstTen = 10 * 100;
            const remaining = days - 10;
            const secondTen = remaining * 80;
            totalCost = firstTen + secondTen; // second ten days result
        } else { // other days
            const firstTen = 10 * 100;
            const secondTen = 10 * 80;
            const remaining = days - 20;
            const otherDays = remaining * 50;
            totalCost = firstTen + secondTen + otherDays; // other days result
        }
    } else {
        return "invalid days" 
    }
    return totalCost; // final result
}
// ---------------- End-hotelCost ---------------- //

// ---------------- Start-megaFriend ---------------- //
function megaFriend(arr) {
    let arrLen = 0;
    let result;
    for (var i = 0; i < arr.length; i++) {  
        if (arr[i].length > arrLen) {
            arrLen = arr[i].length;
            result = arr[i];
        }
    }
    return result;
}
// ---------------- End-megaFriend ---------------- //