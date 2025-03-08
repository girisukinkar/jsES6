// In JavaScript, closures happen when:
// 1. You define a function inside another function
// 2. The inner function remembers and can access variables from the outer function's scope
// 3. The inner function can be returned or passed elsewhere, maintaining access to its original scope


// Example 1: Data privacy with Module pattern

function bank(money) {
    let balance = money;
    function deposit(amount) {
        balance += amount;
    }
    function withdraw(amount) {
        balance -= amount;
    }

    function showBalance() {
        return balance
    }
    return {
        deposit,
        withdraw,
        showBalance
    }
}

const customer = bank();

customer.deposit(100);
customer.withdraw(50);
console.log(customer.showBalance());

/*
* In this example, the `balance` variable is encapsulated within the closure, making it private. The only way to interact with it is through the methods provided in the returned object

* */