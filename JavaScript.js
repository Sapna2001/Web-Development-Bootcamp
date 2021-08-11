// hoisting
a = 1;
var a;
console.log(a);

// var
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"

// let
let g = "say Hi";
let t = 4;

if (t > 3) {
  let g = "say Hello instead";
  console.log(g); // "say Hello instead"
}
console.log(g); // hello is not defined

// const
// const greetingConst = "say Hi";
// const greetingConst = "say Hello instead";// error: Identifier 'greeting' has already been declared

// for loop
for (let i = 0; i < 10; i++) {
  console.log("hi");
}

// this
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function () {
    return this;
  },
};

console.log(person.myFunction());


// functions
hello = function () {
  return "Hello World!";
};

ArrowFunction = () => {
  return "Hello World!";
};

console.log(hello());
console.log(ArrowFunction());

// class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    print = () => {
        console.log(this.name);
        console.log(this.year);
    }
}

let c1 = new Car("A",2019);
c1.print();

// JSON
{
    employee = [
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
};

for(item of employee) {
    console.log(item)
}

// apply
const personApply = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }

  const person2 = {
    firstName: "John",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  console.log(personApply.fullName.apply(person2));

  // create element
  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Element Created";
  paragraph.style.fontSize = "25px";
  paragraph.style.color = "white";
  document.body.appendChild(paragraph);   

  // button onclick
  buttons = document.querySelectorAll("button");
  for (item of buttons) {
    item.addEventListener("click", () => {
        console.log("hi")
        var heading = document.querySelector("h1");
        heading.style.color = "yellow";
    });
  }

