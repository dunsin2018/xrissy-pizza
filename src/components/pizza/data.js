export const pizzaData = [
  {
    name: "FIREHOUSE PIZZA",
    description: "Spicy sausage, pepperoni, red onion, tomatoes, basil",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FFIREHOUSE-PIZZA.jpg?alt=media&token=4fefafed-59c1-41b0-8134-a14317e60ca6",
    price: 24.8,
    id: 1,
  },
  {
    name: "BBQ CHICKEN PIZZA",
    description: "SBBQ sauce, chicken, mozzarella, cheese, tomatoes, red onion",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FBBQ-CHICKEN-PIZZA.jpg?alt=media&token=ca1fabbb-4f2a-4d09-b482-48dda318b3e0",
    price: 25.8,
    id: 2,
  },
  {
    name: "CHEESE PIZZA",
    description: "Tomato sauce, mozzarella cheese, parmesan cheese, basil",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FCHEESE-PIZZA.jpg?alt=media&token=fb1c5043-da6b-4acd-9b05-e1f33002acef",
    price: 25.0,
    id: 3,
  },

  {
    name: "CHICKEN PIZZA",
    description: "Buffalo sauce, mozzarella, red onion, chicken, ranch sauce",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FCHICKEN-PIZZA.jpg?alt=media&token=8f8fafdc-3856-4182-b350-901ef56943ad",
    price: 20.0,
    id: 4,
  },
  {
    name: "GARDEN VEGGIE PIZZA",
    description: "Mushrooms, onions, green peppers, black olives, tomatoes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FGARDEN-VEGGIE-PIZZA.jpg?alt=media&token=9397c359-5380-4d5f-8375-26ad59399010",
    price: 23.85,
    id: 5,
  },
  {
    name: "PEPPERONI PIZZA",
    description: "Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FPEPPERONI-PIZZA.jpg?alt=media&token=1bf55d89-71b5-4b2f-9ce6-524e41407369",
    price: 25.8,
    id: 6,
  },
  {
    name: "ULTIMATE MEAT PIZZA",
    description:
      "Sausage, seasoned ground beef, pepperoni, ham, salami, bacone",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FULTIMATE-MEAT-PIZZA.jpg?alt=media&token=32496007-6766-4457-93fd-c167224ccca6",
    price: 25.8,
    id: 7,
  },
  {
    name: "PROSCIUTTO PIZZA",
    description: "Sliced pepperoni, parmesan cheese, mozzarella cheese, sauce",
    image:
      "https://firebasestorage.googleapis.com/v0/b/xrissypizza.appspot.com/o/pizza-images%2FPROSCIUTTO-PIZZA.jpg?alt=media&token=3dbfeba1-ff5b-40b6-bffc-60f25238404b",
    price: 25.8,
    id: 8,
  },
];

localStorage.setItem("pizzaData", JSON.stringify(pizzaData));
