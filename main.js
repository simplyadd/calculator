var two_nums = [];
var operator = '';
var temp_num = '';		// temporary placeholder for number
var flag_new = true;	// flags beginning of new number

const btns = document.querySelectorAll('button')
const screen = document.querySelector('#screen');

btns.forEach( (button) => {
	button.addEventListener('click', () => {
		let selection = button.textContent;

		if ((!isNaN(selection)) || (selection == '.')) {

			if (flag_new) {
				flag_new = false;
				temp_num = selection;
			} else {
				temp_num += selection;
			}

		} else if (selection == 'CLEAR') {

			two_nums = [];
			operator = '';
			temp_num = '';
			flag_new = false;

		} else {

			if (!flag_new) {
				two_nums.push(temp_num);	// Save number
			}

			if (two_nums.length === 2) {
				// Get result using previously saved operator
				temp_num = operate(parseInt(two_nums[0]), operator, parseInt(two_nums[1]));
				two_nums.shift();
				two_nums[0] = `${temp_num}`;
			}

			flag_new = true;
			operator = selection;	// Save new operator for use later

		}

		screen.textContent = temp_num;
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
