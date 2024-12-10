function greet(person: string, date?: Date): string {
  const currentDate = date || new Date(); // Handle missing date
  console.log(person, currentDate);
  return 'Hello, ' + person + '! Today is ' + currentDate.toDateString();
}

let message = greet('John Doe');
console.log(message);
let message2 = greet('Jane Doe', new Date());
console.log(message2); 