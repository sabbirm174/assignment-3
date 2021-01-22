// https://github.com/sabbirm174/assignment-3

// ---------------- start-kilometerToMeter ---------------- //
function kilometerToMeter(km) {
    var met = 1;
    if (km >= 0) {
        met = 1000 * km;      // 1 km = 1000m
    } else {
        return "invalied kilometer";
    }
    return met;
}
// ---------------- End-kilometerToMeter ---------------- //

// ---------------- start-budgetCalculator ---------------- //
function budgetCalculator(watch, phone, laptop) {
    var totalPrice = 0;
    if(watch === parseInt(watch) && phone === parseInt(phone) && laptop === parseInt(laptop)){
        if (watch >= 0 && phone >= 0 && laptop >= 0) {
            var watchPrice = watch * 50;       //watch price 50
            var phonePrice = phone * 100;     //phone price 100
            var laptopPrice = laptop * 500;    //laptop price 500
            totalPrice = watchPrice + phonePrice + laptopPrice;
        } else {
            return " input must be positive value"
        }
    }
    else {
        return "please input integer value"
    }
    return totalPrice;
}
// ---------------- End-budgetCalculator ---------------- //

// ---------------- Start-hotelCost ---------------- //

function hotelCost(days) {
    var totalCost = 0;
    if (days >= 0 && days === parseInt(days)) {
        if (days <= 10) {               // first ten days
            totalCost = days * 100;     // first ten days result
        } else if (days <= 20) {         // second ten days
            var firstTen = 10 * 100;
            var remaining = days - 10;
            var secondTen = remaining * 80;
            totalCost = firstTen + secondTen;   // second ten days result
        } else { // other days
            var firstTen = 10 * 100;
            var secondTen = 10 * 80;
            var remaining = days - 20;
            var otherDays = remaining * 50;
            totalCost = firstTen + secondTen + otherDays;   // other days result
        }
    } else {
        return "please input valid days"
    }
    return totalCost;       // final result
}
// ---------------- End-hotelCost ---------------- //

// ---------------- Start-megaFriend ---------------- //
function megaFriend(arr) {
    var arrLen = 0;
    var result;
    if(Array.isArray(arr)){         // input value must be an array
        if (arr.length != 0) {      // if array valule is not empty
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].length > arrLen) {
                    arrLen = arr[i].length;
                    result = arr[i];
                }
            }
        } else {
            return "empty array"    // if array valule is empty
        }
    }
    else {
        return "input value must be an array"
    }
    return result;
}
// ---------------- End-megaFriend ---------------- //








