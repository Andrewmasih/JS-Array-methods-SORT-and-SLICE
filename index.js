/* sort() method,sort the items in an Array in ascending and alphabetical order */

/* unicode code points are used rather than the roman/arabic characters themselves, if you have serveralstrings, sort method will sort them alphabetically, if there are numbers, they will be sorted from lowest to highest. */

/* however as unicode code points are used they are ordered by the first character in the number, try adding 11 to the Let numbers in the code example below */

let music = ["jazz", "rock", "hip-hop", "salsa"];

console.log (music.sort());

let numbers = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]; 

console.log (numbers.sort());

let names = ["peter", "adam", "andrew", "joel"];

let sortedNames = names.sort();

console.log(names);
console.log(sortedNames);

/* notice that both the orignal array and the new array have been sorted, this is called 'array mutation', when we run the sort() method, it mutates the orignal array, even when we want the result to be stored in a new varible

we can sort this issue out!

use 'method changing', using 2 or more methods working together, slice() returns a copy of the Array so we can use this method with sort()*/

let colors = ["red", "blue", "green", "pink"];

let sortedColors = colors.slice().sort();

console.log(colors);
console.log(sortedColors);

/* am important thaing to note is that using the SORT() method on its own always change the orignal Array - even if we assign the result to a new varible  */