const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

const makeUpperCase = (arr) => {
	return new Promise ((resolve, reject) => {
		let result = arr.map(name =>  {
			if (typeof name !== "string") {
				reject('Error: Not all items in the array are strings!');
			} else {
				return (name.toUpperCase());
			}
		});
		resolve(result);
})};

const  sortWords = (arr) => {
	return new Promise ((resolve, reject) => {
		resolve(arr.sort());
	});
};

makeUpperCase(arrayOfNames)
	.then(sortWords) 
	.then((result) => console.log(result))
	.catch(error => console.log(error))
 
makeUpperCase(mixedArray)
	.then(sortWords) 
	.then((result) => console.log(result))
	.catch(error => console.log(error))