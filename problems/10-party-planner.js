// Your code here
class PartyPlanner{
	constructor(guestlist = []){
		this.guestlist = guestlist
	}
	addToGuestList(name){
		this.guestlist.push(name)
		return this.guestlist
	}
	throwParty(){
		if (this.guestlist.length===0){
			return  "Gotta add people to the guest list"
		}else{
			return `Welcome to the party ${this.guestlist.join(" and ")}`
		}
	}
}
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}