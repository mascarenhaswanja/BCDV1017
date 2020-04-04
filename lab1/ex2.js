const compareNumToTen = (num) => {
	return new Promise((resolve, reject) => {
		if (num > 10)  resolve(num);
		else reject(num);
	});
};

compareNumToTen(15)
	.then((num) => {
		console.log(`${num} is greater than 10, success!`);
	})
	.catch((num) => {
		console.log(`${num} is less than 10, error!`);
	});
	
compareNumToTen(8)
	.then((num) => {
		console.log(`${num} is greater than 10, success!`);
	})
	.catch((num) => {
		console.log(`${num} is less than 10, error!`);
	});