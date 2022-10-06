// 1. Objects => {}
// OOP = paradigm, way of thinking

// Objects en Js
console.log(typeof "Hello World"); // Type fo date - primitive

console.log(typeof {}); // Object
console.log(typeof []); // Object

console.log(typeof new Date()); // Object

console.log(Number(100)); // Object
console.log(String("cien")); // Object
console.log(Boolean(true)); // Object




// 2. Create Objects:
// { } = Literal object

// Name object
const user = {
    //key: value,
    name: "Juan",
    lastName: "Niño",
    age: 27,
    hobbies: ['read', 'programming', 'run'],
    address: {
        street: "some street",
        city: "Sugamux"
    },
    family: {}
}

console.log(user);



// 3. Properties: (Caracteristicas)
const user = {
    name: "Juan", // Properties
    lastName: "Niño", // Properties
    age: 27 // Properties
}



// 4. Methods: (Comportamientos) Actions

const debitCard = {
    number: "400056457896",

    withdraw: function () { }, // Methods => functions
    deposit: function () { }
}


// Example:

const userFull = {
    // Properties
    name: "Juan",
    lastName: "Niño",
    age: 27,

    //Methods:
    showFullName() {
        return "name lastName"
    }
}

console.log(userFull.showFullName()); // 'name lastName'


// 5. This
	// This object (este objeto)

	// Object
	const userFull = {
        // Properties
        name: "David",
        lastName: "Lizarralde",
        age: 27,
        
        //Methods: Operations
        showFullName() {
                      // This object (userFull)
            return `${this.name} ${this.lastName}`; // Dynamic date
          }
      }
      
      console.log(userFull.showFullName()); // 'name lastName'
    
    
    
    //Example:
    const account = {
      number: "123456789",
      amount: 100,
      
      desposit() {
        this.amount = this.amount + 100 // Increase account amount 
        console.log(this.amount)
      },
                      // Parámetro
      withdraw(quantity) {
        this.amount = this.amount - quantity // withdraw amount
      }
    }
    
    account.desposit(); // 200
    account.desposit(); // 300
    account.desposit(); // 400
    console.log(account);
        /* {
      number: '123456789',
      amount: 400,
      desposit: ƒ desposit()
    } */
    
    
    account.withdraw(200); // 200
    account.withdraw(200); // 0
    
    console.log(account);
    /* {
      number: '123456789',
      amount: 0,
      desposit: ƒ desposit(),
      withdraw: ƒ withdraw()
    }*/




//                                           Exercise 01: CASHIER

/* Pseudo:
	- Object: cashier
  - Props: client, amount, bank, key
  - Methods: withdraw, deposit, seeAmount, changeKey
*/


const cashier = {
    //Props:
    client: "Juan David",
    amount: 100,
    bank: "Bancolombia",
    key: "3942",
    
    //Methods:
    seeAmount() {
      return this.amount;
    },
    
    changeKey(newKey) {
      this.key = newKey;
      return this.key;
    },
    
    withdraw(quantity) {
      this.amount = this.amount - quantity;
    },
    
    deposit(quantity) {
      this.amount = this.amount + quantity;
    }
  }
  
  
  // See client
  cashier.client;
  
  // See amount
  cashier.amount;
  
  // Deposit = 1000
  cashier.deposit(1000);
  cashier.amount; //1100
  
  // change the key for "4567"
  cashier.changeKey("4567");
  cashier.key;
  
  // withdraw
  cashier.withdraw(600);
  cashier.amount; //500



// 6. Constructor

// Build
function Person() {
    this.name = ""
    this.lastName = ""
    this.age = 0
    this.showFullName = function() {
      return `${this.name} ${this.lastName}`
    }
  }
  
  
  // Call
  const user1 = new Person();
  user1.name = "Juan";
  user1.lastName = "Niño";
  user1.age = 27;
  
  console.log(user1.showFullName());
  /* 
  'Juan'
  'Niño'
  27
  'Juan Niño'*/



// 7. Object()
// Js objects

const userObject = {
    name: "Juan",
    lastName: "David",
    age: 27,
    showName(){}
  }
  
  console.log(Object.keys(userObject));
  // Keys => [ 'name', 'lastName', 'age', 'showName' ]
  
  console.log(Object.values(userObject));
  // Values => [ 'Juan', 'David', 27, ƒ showName() ]
  
  


// 8. New:

function Person() {
  this.name = "";
  this.lastName = "";
}

const person1 = new Person();
console.log(person1);
/*
Person {
  name: '',
  lastName: '',
  __proto__: { constructor: ƒ Person() }
}
*/



// 9. Prototype

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName
  
  this.displayName = function() {
    return `${this.name} ${this.lastName}`
  }
}

const juan = new Person("Juan", "Niño");

console.log(juan.displayName());


// Add other method(function):
juan.greet = function() {
  return `Hello I'm ${this.name}`
}

console.log(juan);
/*Person {
  name: 'Juan',
  lastName: 'Niño',
  displayName: ƒ (),
  greet: ƒ (), // New method add ONLY in object john
} */


// Prototype => new changes in the constructor:
const john = new Person("John", "Jairo");
const juana = new Person("Juana", "Paola");

Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`
}

console.log(john.greet()); // "Hello, I'm John"
console.log(juana.greet()); // "Hello, I'm Juana"


// 10. Class => Group of methods

class Person {
  constructor(name, lastName) {
    //Props
    this.name = name
    this.lastName = lastName
  }
  
  //Methods
  greet() {
    return `Hello! ${this.name} ${this.lastName}`
  }
}

const user = new Person('Joe', 'Alzate');
console.log(user);
/*Person {
  name: 'Joe',
  lastName: 'Alzate',
  __proto__: { constructor: ƒ Person(), greet: ƒ greet() }
}*/

console.log(user.greet()); // Called the method greet
/*
'Hello! Joe Alzate'
*/



// 11. OOP Principles
/*
- Modularity and code reusability
- Model problems through objects

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction => Objects to simplify reality
*/


// 12. Association

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName
  }
}

const john = new Person('Juan', 'Niño');
const maria = new Person('Maria', 'Niño');

// Relation
maria.parent = john;

console.log(maria);
/* Person {
  name: 'Maria',
  lastName: 'Niño',
  parent: Person { name: 'Juan', lastName: 'Niño' },
}*/




// 13. Aggregationn
// - Aggregate => component


class Company {
  constructor(name) {
    this.name = name;
    this.employees = []
  }
}

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName
  }
}

// Components (sons)
const john = new Person('Juan', 'Niño');
const maria = new Person('Maria', 'Niño');

// Aggregate (father)
const companyFazt = new Company('Fazt company');

companyFazt.employees.push(john, maria); // Add to array

console.log(companyFazt);
/*Company {
  name: 'Fazt company',
  employees: [
    Person {
      name: 'Juan',
      lastName: 'Niño',
    },
    Person {
      name: 'Maria',
      lastName: 'Niño',
    }
  ],
}*/



// 14. Composition:
// Component with independent life

const person = {
  name: 'ryan',
  lastName: "Ray",
  address: { // Componente without independent life
    street: "123 street",
    city: "Sugamuxi",
    country: "Colombia"
  }
}



// 15. OOP Principles
// Encapsulation: Concentrate data and functions hiding internal details


function Company(name){
  let employees = []
  this.name = name
  
  this.getEmployees = function(){
    return employees
  }
  
  this.addEmployee = function(employee){
    employees.push(employee)
  }
}

const company = new Company('Coca Cola');
console.log(company);
/*Company {
  name: 'Coca Cola',
  getEmployees: ƒ (),
  addEmployee: ƒ (),
}*/

company.addEmployee({name: 'ryan'}); // Add to array
console.log(company.getEmployees()); // Get employees
/*
[ { name: 'ryan' } ]
*/