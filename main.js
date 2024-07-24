var two_nums = [];
var operator = '';
var temp_num = '';	// Temporary placeholder for number

const btns = document.querySelectorAll('button')
const screen = document.querySelector('#screen');
const result = document.querySelector('#result');
const history = document.querySelector('#history');
// var equation = document.createElement('p');

btns.forEach( (button) => {
	button.addEventListener('click', () => {
		let selection = button.textContent;

		if (!isNaN(selection)) {
			temp_num += selection;	// Concat string

			if (operator == '=') {
				operator = '';
				screen.textContent = selection;
			} else {
				screen.textContent += selection;
			}
		} else if (selection == 'CLEAR') {
			two_nums = [];
			operator = '';
			temp_num = '';
			screen.textContent = temp_num;
			result.textContent = temp_num;
			history.textContent = temp_num;
		} else {
			if (temp_num != '') two_nums.push(temp_num);	// Save number
			screen.textContent += ` ${selection} `; // Display operator

			if (two_nums.length === 2) {
				// Get and print result using previously saved operator
				temp_num = operate(parseInt(two_nums[0]), operator, parseInt(two_nums[1]));
				result.textContent = temp_num;

				two_nums.shift();
				two_nums[0] = `${temp_num}`;
			}

			operator = selection;	// Save new operator for use later
			if (operator == '=') {
				screen.textContent += two_nums[0];
				result.textContent = '';
			}

			temp_num = '';	// Clear for the next number
		}
	});
});

function operate(a, operator, b) {
	let res;

	switch (operator) {
		case '+':
			res = add(a, b);
			break;
		case '-':
			res = subtract(a, b);
			break;
		case '*':
			res = multiply(a, b);
			break;
		case '/':
			res = divide(a, b);
			break;
		default:
			res = 0;
			break;
	}
	return res;
}

const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const multiply = function (a, b) {
	return a * b;
};

const divide = function (a, b) {
	if (b === 0) return 'UNDEFINED';
	return a / b;
};

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate
};
