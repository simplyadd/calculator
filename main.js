var two_nums = [];
var operator = "";
var temp_num = "";		// temporary placeholder for number
var flag_new = true;	// flags beginning of new number
var eq_count = 0;			// consecutive "=" button clicks

const btns = document.querySelectorAll("button")
const screen = document.querySelector("#screen");

btns.forEach( (button) => {
	button.addEventListener("click", () => {
		let selection = button.textContent;

		if ((!isNaN(selection)) || (selection == ".")) {

			if (flag_new) {
				flag_new = false;
				eq_count = 0;
				temp_num = selection;
			} else {
				temp_num += selection;
			}

		} else if (selection == "CLEAR") {

			two_nums = [];
			operator = "";
			temp_num = "";
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

			} else if (operator == "=") {
				eq_count += 1;
				snark_attack(eq_count);
			}

			flag_new = true;
			operator = selection;	// Save new operator for use later

		}

		screen.textContent = temp_num;
	});
});

/* 0 is snark comments for dividing by 0.
 * Any other number is an input to the eq_count
 * 	switch case for repeatedly clicking '=' button.
 */
function snark_attack(NaN_or_eq) {
	switch (eq_count) {
		case 0:
			window.alert("Is your divisor the number of friends you haveɀ̣");
			window.alert("...or maybe your current working brain cells?");
			window.alert("Go to sleep, take a break, hydrate or something.");
			break;
		case 1:
			temp_num = `${two_nums[0]} = ${two_nums[0]}`
			break;
		case 2:
			window.alert("Try clicking equals again.");
			break;
		case 3:
			window.alert("Aren't you obedient?");
			break;
		case 4:
			window.alert("IT'S NOT GOING TO CHANGE‽");
			break;
		case 5:
			window.alert("ya know what");
			temp_num = 80085;
			break;
		default:
			temp_num = 800845;
			eq_count = 0;
			break;
	}
}

function operate(a, operator, b) {
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			return 0;
	}
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
	if (b === 0) snark_attack(0);
	return a / b;
};

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate
};
