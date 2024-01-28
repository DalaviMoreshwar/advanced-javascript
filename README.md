# 🐘 Advanced JavaScript

## Objects

An object is a collection of properties and a property is an association between a `name (or key)` and a `value`. A property's value can be a function, in which case the property is known as `method`.

### Multiple ways to define an object

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