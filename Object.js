const obj = {}

obj[1] = "hello"
console.log(obj[1]);   // 'hello'

obj["1"] = "goodbye"
console.log(obj[1]);   // 'goodbye'


// --------------------------------------------------------------------------------------------------------------------

/**
 * BankAccount class
  - Properties
    - balance (defaults to 0 if not provided)
    - accountHolder
    - accountNumber
  - Methods
    - deposit(amt) - increases balance by amt
    - withdraw(amt) - decreses credit by amt
 */

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    if (!Number.isFinite(balance) || balance < 0) throw new Error("Invalid balance amount");

    this.accNum = accountNumber;
    this.accHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      return `Deposited: $${amt}. New Balance: $${this.balance}`;
    } else {
      return `Do not proceed with negative amount.`;
    }
  }

  withdraw(amt) {
    if (amt > this.balance ) { 
      return `Insufficient balance.`;
    }
    if (amt > 0) {
      this.balance -= amt;
      return `Withdraw: $${amt}. New Balance: $${this.balance}`;
    } else {
      return `Invalid transaction`;
    }
  }

}

const person = new BankAccount("123abc", "Moreshwar Dalavi");
console.log(person.balance)         // 0
console.log(person.deposit(100));   // Deposited: $100. New Balance: $100

console.log(person.withdraw(-50));  // Invalid transaction
console.log(person.withdraw(200));  // Insufficient balance
console.log(person.withdraw(50));   // Withdraw: $50. New Balance: $50
console.log(person.withdraw(50));   // Withdraw: $50. New Balance: $0

console.log(person.balance)         // 0
console.log(person.deposit(-100));  // Do not proceed with negative amount.


class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return `My name is ${this.name}`;
  }
}

class Cat extends Animal { 
  sound() {
    return `Meow`
  }
}

const a = new Cat('Lly');

console.log(a.sound());


