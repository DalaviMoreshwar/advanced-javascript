# 🐘 Advanced JavaScript

## **{ }** Objects

An object is a collection of properties and a property is an association between a `name (or key)` and a `value`. A property's value can be a function, in which case the property is known as `method`.

### Details should know

- Properties that don't exist evaluate to **`undefined`**
- All keys get **"stringifiled"**

<p align="center">
  <img src="./assets/images/object-stringfield.png" width="65%" alt="object-stringfield" />
</p>

<details>
<summary><b>Multiple ways to define an object</b></summary>
<table>
  <tr>
    <th align="left">01 - With object literals</th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        const user = {
          name: "John",
          age: 30,
        };
      </pre>
    </td>
  </tr>
  <tr>
    <th align="left">02 - Object constructor without <code>this</code> keyword</th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        const user = Object({
          name: "John",
          age: 30,
        });
      </pre>
    </td>
  </tr>
  <tr>
    <th align="left">03 - Object constructor with <code>new</code> keyword</th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        const user = new Object({
          name: "John",
          age: 30,
        });
      </pre>
    </td>
  </tr> 
  <tr>
    <th align="left">04 - Using object <code>create()</code> method</th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        const human = {
          species: "human",
          isAlive: true,
        };
        const person = Object.create(human, {
          gender: {
            value: "Female",
            writable: true,
            enumerable: true,
            configurable: true,
          },
        });
        console.log(person);          // { gender: 'Female' }
        console.log(person.gender);   // Female
        console.log(person.species);  // human
        console.log(person.isAlive);  // true
      </pre>
    </td>
  </tr>
  <tr>
    <th align="left">05 - Using object <code>assign()</code> menthod</th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        const developer = Object.assign({}, {
          experienceLevel: "Senior",
          jobTitle: "Software Engineer",
        });
        console.log(developer);       // { experienceLevel: 'Senior', jobTitle: 'Software Engineer' }
      </pre>
    </td>
  </tr>
  <tr>
    <th align="left">06 - Using <code>constructor</code> function</th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        function Data(id, name, email) {
          this.id = id;
          this.name = name;
          this.email = email;
        }
        const userJosh = new Data(1, "Josh", "josh@gmail.com");
        console.log(userJosh);        // Data {id: 1, name: 'Josh', email: 'josh@gmail.com'}
      </pre>
    </td>
  </tr>
  <tr>
    <th align="left">07 - Using ES6 <code>class</code></th>
  </tr>
  <tr>
    <td>
      <pre lang="js">
        class Employee {
          constructor() {
            this.empId = 1;
            this.empName = "Mathew";
          }
        }           
        const emp = new Employee();         
        console.log(emp);              // Employee { empId: 1, empName: 'Mathew' }
      </pre>
    </td>
  </tr>
</table>
</details>

---

## Class

Classes is a blueprint of functionality to avoid code duplication.

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on [prototypes](#prototypes) but also have some syntax and semantics that are unique to classes.

Classes are in fact **Special functions**. Class can be defined as _class expression_ & _class decleration_

<p align="center">
  <img src="./assets/images/basic-class.png" width="65%" alt="basic-class" />
</p>

### Constructor

The constructor method is a special method of the [Class](#Class) for creating & initializing an object instance of that class.

**What to do with the constructor?**

- Whatever you want.
- Common things
  - Validate data
  - assign properties

<p align="center">
  <img src="./assets/images/constructor.png" width="65%" alt="constructor" />
</p>

> [!TIP]
>
> - Constructor calls automatically.
>
> - `this` refers to the instance of the class, not the class itself.

> [!NOTE]
>
> - The constructor function always returns `undefined`
>
> - It's bad practice to to call constructor functions explicitly.

#### 📖 Exersise

BankAccount class

- Properties
  - `balance` (defaults to 0 if not provided)
  - `accountHolder`
  - `accountNumber`
- Methods
  - `deposit(amt)` - increases balance by `amt`
  - `withdraw(amt)` - decreses credit by `amt`

<p align="center">
  <img src="./assets/images/class-real-life-example.png" width="65%" alt="class-real-life-example" />
</p>

### Instance Methods

- Functions are placed in a class are _`methods`_ (instance methods)
- They have access to properties of the object with _`this`_
- They take arguments/returns data like any other function.

### Inheritance

- `Inheritance` means passing down characteristics from a parent to a child, so that new piece of code can reuse and build upon the features of exsiting one.
- `extends` keyword is use to make inheritance.

### _`super`_ keyword

- The `super` keyword is used to access properties of an object literal or calss's `[[prototype]]`, or invoke a superclass's constructor.

<p align="center">
  <img src="./assets/images/super.png" width="65%" alt="super" />
</p>

<p align="center">
  <img src="./assets/images/super-2.png" width="65%" alt="super" />
</p>

> [!TIP]
>
> We have to call `super` when we add own properties of the child class.

---

#### _`static`_ Properties & Methods

- `static` methods and properties cannot directly accessed on instance of the class. Instead they're accessed by the `class` itself.

- Real life examples:
  - `Math()` function
    - `Math.random()`
