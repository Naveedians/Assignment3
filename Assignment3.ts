// Creating an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Creating an object with an array
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    features: ["GPS", "Bluetooth", "Sunroof"]
  };
  
  // Accessing properties of the objects
  console.log("Person:");
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  
  console.log("\nCar:");
  console.log("Make:", car.make);
  console.log("Model:", car.model);
  console.log("Year:", car.year);
  console.log("Features:", car.features.join(", "));
  