//  problem 3 

function picnicBudget(amount) {
    let store
    if (amount < 0){
        return "Please enter a valid input";
    }
    if (amount <= 100) {
        store = amount * 5000;

    } else if (amount <= 200) {
        let firstAmount = 100 * 5000;
        let remainingAmount = (amount - 100) * 4000;
        store = firstAmount + remainingAmount;
    }

    else {
        let firstAmount = 100 * 5000;
        let secondAmount = 100 * 4000;
        let remainingAmount = (amount - 200) * 3000;

        store = firstAmount + secondAmount + remainingAmount;
    }

    return store;
}

console.log(picnicBudget(150));