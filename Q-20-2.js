// Question 2: Simulating Private Variables with Closures

function createBankAccount() {
  let bal = 0;

  function deposit(amount) {
    bal = bal + amount;
    console.log(bal);
  }
  function withdraw(amount) {
    if (amount <= bal && amount > 0) {
      bal -= amount;
      console.log(bal);
    } else {
      console.log(" Insufficient balance");
    }
  }
  function displayBalance() {
    console.log("Current Balance: " + bal);
  }
  return {
    deposit: deposit,
    withdraw: withdraw,
    displayBalance: displayBalance,
  };
}
let myAcc = createBankAccount();

myAcc.deposit(500),
  myAcc.withdraw(200),
  myAcc.withdraw(400),
  myAcc.displayBalance();
