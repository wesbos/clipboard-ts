// This function takes a Generic of FoodType
function makeABunchOf<FoodType>(food: FoodType, howMany: number): FoodType[] {
  const foodArray = Array.from({ length: howMany }, () => food);
  return foodArray;
}
// Make our Food Types
interface Pizza {
  name: string;
  slices: number;
}
interface Sandwich {
  name: string;
  veggie: boolean;
}

// Make some Food
const hamSandwich: Sandwich = { name: 'Hammy Sammy', veggie: false };
const canadianPizza: Pizza = { name: 'Canadian Pizza', slices: 10 };

// Here we pass the FoodType to the generic explicitly
const pizzaExplicit = makeABunchOf<Pizza>(canadianPizza, 3); // type of Pizza[]

// On this one, we infer a <FoodType> of Pizza, because we pass a pizza
const pizzas = makeABunchOf(canadianPizza, 3); // type of Pizza[]

// Here Sandwich type in inferred because we pass a Sandwich
const sandwiches = makeABunchOf(hamSandwich, 3); // type of Sandwich[]

// this is also good if passing the values directly as they can't be inferred
const pizzaExplicit2 = makeABunchOf<Pizza>({ slices: 11, name: 'Pepperoni' }, 3);

console.log(pizzaExplicit2);
