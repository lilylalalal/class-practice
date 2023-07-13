function allTheArgs(func, ...args) {
  // Your code here
 return (...Nargs) => func(...args.concat(...Nargs))

}
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

const bow = (...names) => {
  return "You bowed to " + names.join(" and ");
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"


const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour);  // => 7
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;