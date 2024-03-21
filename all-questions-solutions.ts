// 2. Personal Message
let q2 = () => {
  // Store the person's name in a variable
  let personName: string = "Owais";

  // Print a message to the person
  console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);
}

// 3. Name Cases
let q3 = () => {
  // Store the person's name in a variable
  let personName: string = "Muhammad Owais Nizami";
  // Print the person's name in lowercase
  console.log("Lowercase:", personName.toLowerCase());

  // Print the person's name in uppercase
  console.log("Uppercase:", personName.toUpperCase());

  // Print the person's name in titlecase
  console.log("Titlecase:", personName.replace(/\b\w/g, char => char.toUpperCase()));
}

// 4. Famous Quote
let q4 = () => {
  // Define the quote and its author
  let quote: string = "Failure is a word unknown to me.";
  let author: string = "Muhammad Ali Jinnah";

  // Print the quote and its author
  console.log(`${author} once said, "${quote}"`);
}

// 5. Famous Quote 2
let q5 = () => {
  // Store the famous person's name in a variable
  let famous_person: string = "Muhammad Ali Jinnah";

  // Define the quote
  const quote: string = "Failure is a word unknown to me.";

  // Compose the message
  let message: string = `${famous_person} once said, "${quote}"`;

  // Print the message
  console.log(message);

}

// 6. Stripping Names
let q6 = () => {
  // Store the person's name with whitespace characters
  let personNameWithWhitespace: string = "\t \n Muhammad Owais Nizami \t \n";

  // Print the name with whitespace
  console.log("Name with whitespace:", personNameWithWhitespace);

  // Strip the whitespace from the name
  let strippedName: string = personNameWithWhitespace.trim();

  // Print the stripped name
  console.log("Stripped name:", strippedName);

}

// 7. Number Eight
let q7 = () => {
  // Addition
  let additionResult: number = 4 + 2;
  console.log("Addition:", additionResult);

  // Subtraction
  let subtractionResult: number = 16 - 8;
  console.log("Subtraction:", subtractionResult);

  // Multiplication
  let multiplicationResult: number = 4 * 2;
  console.log("Multiplication:", multiplicationResult);

  // Division
  let divisionResult: number = 64 / 8;
  console.log("Division:", divisionResult);

}

// 8. Printing on single line
let q8 = () => {
  console.log(5 + 3);
  console.log(10 - 2);
  console.log(4 * 2);
  console.log(16 / 2);

}

// 9. Favorite Number
let q9 = () => {
  // Store your favorite number in a variable
  let favoriteNumber: number = 13;

  // Create a message revealing your favorite number
  let message: string = `My favorite number is ${favoriteNumber}.`;

  // Print the message
  console.log(message);

}

// 10. Adding Comments
let q10 = () => {
  // Program: Personal Message
  // Author: [Your Name]
  // Date: [Current Date]
  // Description: This program stores a person's name in a variable and prints a personalized message to that person.

  // Store the person's name in a variable
  let personName: string = "Muhammad Owais";

  // Print a message to the person
  console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);


  // Program: Favorite Number
  // Author: [Your Name]
  // Date: [Current Date]
  // Description: This program stores the author's favorite number in a variable and reveals it in a message.

  // Store your favorite number in a variable
  let favoriteNumber: number = 13;

  // Create a message revealing your favorite number
  let message: string = `My favorite number is ${favoriteNumber}.`;

  // Print the message
  console.log(message);


}

// 11. Names
let q11 = () => {
  // Store the names of your friends in an array called names
  let names: string[] = ["Ahsan", "Mubeen", "Waqas", "Faraz"];

  // Print each person's name by accessing each element in the list, one at a time
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

}

// 12. Greetings
let q12 = () => {
  // Store the names of your friends in an array called names
  let names: string[] = ["Ahsan", "Mubeen", "Waqas", "Faraz"];

  // Print a personalized message to each person
  for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! Have a wonderful day!`);
  }

}

// 13. Transportation array
let q13 = () => {
  // Store favorite modes of transportation in an array
  let favTransportations: string[] = ["motorcycle", "car", "bicycle", "train"];

  // Print statements about each item in the list
  for (let i = 0; i < favTransportations.length; i++) {
    console.log(`I would like to own a ${favTransportations[i]}.`);
  }

}

// 14. More Guests
let q14 = () => {
  // Store the list of people to invite to dinner
  let guests: string[] = ["Waqas", "Ahsan", "Abdul Hannan"];

  // Print an invitation message to each person
  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

}

// 15. Shrinking Guest List
let q15 = () => {
  // Store the list of people to invite to dinner
  let guests: string[] = ["Waqas", "Ahsan", "Abdul Hannan"];

  // Print an invitation message to each person
  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

  // Print the name of the guest who can't make it
  console.log(`${guests[1]} can't make it to the dinner.`);

  // Replace the name of the guest who can't make it with a new person
  guests[1] = "Faraz";

  // Print a second set of invitation messages
  console.log("\nSecond set of invitation messages:");

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

}

// 16. Again Guests
let q16 = () => {
  // Store the list of people to invite to dinner
  let guests: string[] = ["Waqas", "Ahsan", "Abdul Hannan"];

  // Print an invitation message to each person
  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

  // Print the name of the guest who can't make it
  console.log(`${guests[1]} can't make it to the dinner.`);

  // Replace the name of the guest who can't make it with a new person
  guests[1] = "Faraz";

  // Print a second set of invitation messages
  console.log("\nSecond set of invitation messages:");

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

  // Inform people about the bigger dinner table
  console.log("\nGreat news! We found a bigger dinner table.");

  // Add new guests to the list
  guests.unshift("Ahsan"); // Add at the beginning
  guests.splice(Math.floor(guests.length / 2), 0, "Zubair"); // Add in the middle
  guests.push("Manzar"); // Append to the end

  // Print a new set of invitation messages
  console.log("\nNew set of invitation messages:");

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

}

// 17. Again Guests
let q17 = () => {
  // Store the list of people to invite to dinner
  let guests: string[] = ["Waqas", "Ahsan", "Abdul Hannan", "Zubair", "Manzar", "Faraz"];

  // Print an invitation message to each person
  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

  // Inform that only two people can be invited for dinner
  console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

  // Remove guests from the list until only two names remain
  while (guests.length > 2) {
    let removedGuest: string = guests.pop()!;
    console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
  }

  // Print a message to each of the two people still on the list
  console.log("\nInvitation messages for the remaining guests:");

  for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you're still invited to dinner. Please join me for an evening of stimulating conversation.`);
  }

  // Remove the last two names from the list
  guests.pop();
  guests.pop();

  // Print the list to ensure it's empty
  console.log("\nRemaining guests list:", guests);

}

// 18. Places to visit
let q18 = () => {
  // Store the locations in an array
  let placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "New York"];

  // Print the array in its original order
  console.log("Original order:", placesToVisit);

  // Print the array in alphabetical order without modifying the actual list
  console.log("Alphabetical order:", [...placesToVisit].sort());

  // Show that the array is still in its original order
  console.log("Original order is still preserved:", placesToVisit);

  // Print the array in reverse alphabetical order without changing the order of the original list
  console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

  // Show that the array is still in its original order
  console.log("Original order is still preserved:", placesToVisit);

  // Reverse the order of the list
  placesToVisit.reverse();
  console.log("Reversed order:", placesToVisit);

  // Reverse the order of the list again to return it to its original order
  placesToVisit.reverse();
  console.log("Back to original order:", placesToVisit);

  // Sort the array so it's stored in alphabetical order
  placesToVisit.sort();
  console.log("Sorted in alphabetical order:", placesToVisit);

  // Sort to change the array so it's stored in reverse alphabetical order
  placesToVisit.sort((a, b) => b.localeCompare(a));
  console.log("Sorted in reverse alphabetical order:", placesToVisit);

}

// 19. Total number of guests
let q19 = () => {
  // Store the list of people to invite to dinner
  let guests: string[] = ["Waqas", "Ahsan", "Abdul Hannan", "Zubair", "Manzar", "Faraz"];

  // Print the number of people being invited to dinner
  console.log(`Total number of people invited to dinner: ${guests.length}`);

}

// 20. Arrays
let q20 = () => {
  // Store a list of famous landmarks around the world
  let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Pyramids of Giza",
    "Sydney Opera House"
  ];

  let countries: string[] = [
    "Pakistan",
    "India",
    "China",
    "Afghanistan"
  ]

  let array0: string[][] = [landmarks, countries]
  let array1: string[] = [...landmarks, ...countries]


  // Print the arrays
  console.log(array0)
  console.log(array1)
}

// 21. Objects
let q21 = () => {
  // Define an object representing information about books
  let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    yearPublished: 1960
  };

  let book2 = {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    yearPublished: 1949
  };

  let book3 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romantic Fiction",
    yearPublished: 1813
  };

  // Print information about each book
  console.log("Book 1:", book1);
  console.log("Book 2:", book2);
  console.log("Book 3:", book3);

}

// 22. Intentional error
let q22 = () => {
  // Store the list of people to invite to dinner
  let guests: string[] = ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie", "Leonardo da Vinci", "Ada Lovelace"];

  // Print an invitation message to each person
  for (let i = 0; i <= guests.length; i++) { // Changed <= to guests.length instead of guests.length - 1
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner. Please join me for an evening of stimulating conversation.`);
  }

}

// 23. conditions
let q23 = () => {
  let x = 5;
  let y = 10;
  let z = "5";

  // Test 1
  console.log("Is x equal to 5? I predict True.");
  console.log(x == 5);

  // Test 2
  console.log("Is y equal to 10? I predict True.");
  console.log(y == 10);

  // Test 3
  console.log("Is z equal to '5'? I predict True.");
  console.log(z == "5");

  // Test 4
  console.log("Is x not equal to 10? I predict True.");
  console.log(x != 10);

  // Test 5
  console.log("Is y greater than x? I predict True.");
  console.log(y > x);

  // Test 6
  console.log("Is x less than or equal to 5? I predict False.");
  console.log(x < 5);

  // Test 7
  console.log("Is z strictly equal to 5? I predict False.");
  console.log(z > "5");

  // Test 8
  console.log("Is x strictly equal to '5'? I predict False.");
  console.log(x < 5);

  // Test 9
  console.log("Is y less than x? I predict False.");
  console.log(y < x);

  // Test 10
  console.log("Is x greater than or equal to 6? I predict False.");
  console.log(x >= 6);

}

// 24. More Conditions
let q24 = () => {
  let string1 = "hello";
  let string2 = "world";
  let number1 = 10;
  let number2 = 20;
  let array = [1, 2, 3, 4, 5];

  // Tests for equality and inequality with strings
  console.log("Equality test with strings: I predict False.");
  console.log(string1 == string2);

  console.log("Inequality test with strings: I predict True.");
  console.log(string1 != string2);

  // Tests using the lower case function
  console.log("Lowercase test: I predict True.");
  console.log(string1.toLowerCase() == "hello");

  // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  console.log("Numerical equality test: I predict False.");
  console.log(number1 == number2);

  console.log("Greater than test: I predict False.");
  console.log(number1 > number2);

  console.log("Less than test: I predict True.");
  console.log(number1 < number2);

  console.log("Greater than or equal to test: I predict False.");
  console.log(number1 >= number2);

  console.log("Less than or equal to test: I predict True.");
  console.log(number1 <= number2);

  // Tests using "and" and "or" operators
  console.log("AND operator test: I predict True.");
  console.log(number1 > 5 && number2 < 30);

  console.log("OR operator test: I predict True.");
  console.log(number1 < 5 || number2 > 15);

  // Test whether an item is in an array
  console.log("Array inclusion test: I predict True.");
  console.log(array.includes(3));

  // Test whether an item is not in an array
  console.log("Array exclusion test: I predict False.");
  console.log(array.includes(6));

}

// 25. Alien Colors #1
let q25 = () => {
  let alien_color = 'green';
  if (alien_color == 'green') {
    console.log("The player just earned 5 points.");
  }
};

// 26. Alien Colors #2
let q26 = () => {
  let alien_color = 'red';
  if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
  } else {
    console.log("The player just earned 10 points.");
  }
};

// 27. Alien Colors #3
let q27 = () => {
  let alien_color = 'yellow';
  if (alien_color == 'green') {
    console.log("The player earned 5 points.");
  } else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
  } else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
  }
};

// 28. Stages of Life
let q28 = () => {
  let age = 25;
  if (age < 2) {
    console.log("The person is a baby.");
  } else if (age < 4) {
    console.log("The person is a toddler.");
  } else if (age < 13) {
    console.log("The person is a kid.");
  } else if (age < 20) {
    console.log("The person is a teenager.");
  } else if (age < 65) {
    console.log("The person is an adult.");
  } else {
    console.log("The person is an elder.");
  }
};

// 29. Favorite Fruit
let q29 = () => {
  let favorite_fruits = ['apple', 'banana', 'orange'];
  if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
  }
  if (favorite_fruits.includes('grapes')) {
    console.log("You really like grapes!");
  }
  if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
  }
};

// 30. Hello Admin
let q30 = () => {
  let usernames = ['john', 'admin', 'mary', 'alice', 'tom'];
  for (let user of usernames) {
    if (user === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  }
};

// 31. No Users
let q31 = () => {
  let usernames = [];
  if (usernames.length == 0) {
    console.log("We need to find some users!");
  }
};

// 32. Checking Usernames
let q32 = () => {
  let current_users = ['John', 'Alice', 'mary', 'tom', 'bob'];
  let new_users = ['Mary', 'Tom', 'harry', 'Bob', 'jane'];
  for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
      console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
      console.log(`Congratulations, ${new_user} is available.`);
    }
  }
};

// 33. Ordinal Numbers
let q33 = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let number of numbers) {
    let ordinal;
    if (number == 1) {
      ordinal = "st";
    } else if (number == 2) {
      ordinal = "nd";
    } else if (number == 3) {
      ordinal = "rd";
    } else {
      ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
  }
};

// 34. Pizzas
let q34 = () => {
  let pizzas = ['pepperoni', 'margherita', 'vegetarian'];
  for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
  }
  console.log("I really love pizza!");
};

// 35. Animals
let q35 = () => {
  let animals = ['dog', 'cat', 'rabbit'];
  for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
  }
  console.log("Any of these animals would make a great pet!");
};

// 36. T-Shirt
let q36 = (size: string, message: string) => {
  console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
};

// 37. Large Shirts
let q37 = (size: string = 'large', message: string = 'I love TypeScript') => {
  console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
};

// 38. Cities
let q38 = (city: string, country: string = 'Pakistan') => {
  console.log(`${city} is in ${country}.`);
};

// 39. City Names
let q39 = (city: string, country: string) => {
  return `${city}, ${country}`;
};

// 40. Album
let q40 = (artist: string, album: string, tracks?: number) => {
  let album_info: any = {
    artist: artist,
    album: album
  };
  if (tracks !== undefined) {
    album_info.tracks = tracks;
  }
  return album_info;
};

// 41. Magicians
let q41 = (magicians: string[]) => {
  for (let magician of magicians) {
    console.log(magician);
  }
};

// 42. Great Magicians
let q42 = (magicians: string[]) => {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
  return magicians;
};

// 43. Unchanged Magicians
let q43 = (magicians: string[]) => {
  let great_magicians = [...magicians];
  for (let i = 0; i < great_magicians.length; i++) {
    great_magicians[i] = "the Great " + great_magicians[i];
  }
  return great_magicians;
};

// 44. Sandwiches
let q44 = (...items: string[]) => {
  console.log("You ordered a sandwich with:");
  for (let item of items) {
    console.log(item);
  }
};

// 45. Cars
let q45 = (manufacturer: string, model: string, ...options: string[]) => {
  let car_info: any = {
    manufacturer: manufacturer,
    model: model
  };
  for (let option of options) {
    let [key, value] = option.split(":");
    car_info[key.trim()] = value.trim();
  }
  return car_info;
};
