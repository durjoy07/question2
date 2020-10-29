// Updated Code
// Sorry, I didn't notice first that this problem has to be solved by using built-in higher order function
// Now I have solved it using higher order function

let notifications = [
	{message: 'Lorem', read: true},
	{message: 'Ipsum', read: true},
	{message: 'Dolor', read: true},
	{message: 'Sit', read: false},
	{message: 'Amet', read: true}
];

let allRead = true;
allRead = notifications.every(currentValue => currentValue.read === true);
console.log(allRead);


//=============================== My Previous Solution ========================
// let notification = [
//   { message: "Lorem", read: true },
//   { message: "Ipsum", read: true },
//   { message: "Dolor", read: true },
//   { message: "Sit", read: false },
//   { message: "Amet", read: true },
// ];

// let allRead = true;

// let arrLength = notification.length - 1;
// let falseResult = 0;

// function arryMap(n, data) {
//   let valueObject = data[n];
//   if (!valueObject.read) {
//     falseResult++;
//   }

//   if (falseResult !== 0) {
//     allRead = false;
//     return console.log(allRead);
//   }
//   if (n === 0) {
//     return console.log(allRead);
//   }
//   return arryMap(n - 1, data);
// }

// arryMap(arrLength, notification);
