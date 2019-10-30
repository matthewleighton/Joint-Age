updateDates();

function inputKeypress(event) {
	if (event.charCode == 13) {
		updateDates();
	}
}

function updateDates() {
	now = moment();

	console.log(now);
	dob1 = document.getElementById('dob1').value;
	dob2 = document.getElementById('dob2').value;

	days1 = now.diff(dob1, 'days');
	days2 = now.diff(dob2, 'days');

	console.log(days1);
	console.log(days2);

	daysTotal = days1 + days2;

	console.log(daysTotal);

	//daysTotal = 365 + 30 + 29;


	jointBirthday = now.subtract(daysTotal, 'days');



	totalAge = moment.duration(daysTotal, 'days');
	totalAgeMessage = totalAge.years() + ' years, ' + totalAge.months() + ' months, ' + totalAge.days() + ' days.';

	console.log(totalAge);
	

	document.getElementById('totalAge').innerHTML = totalAgeMessage;


	birthdays = [];


	years = totalAge.years();

	console.log('--------');
	console.log(years);

	today = moment();


	// Yes, I know this is terrible.
	// Checking collective age on each day, up until ~100 years, and recording dates when collective years increases.
	while (daysTotal < 201*365) {
		daysTotal += 2;
		today.add(1, 'day');
		
		newTotalAge = moment.duration(daysTotal, 'days');

		if (newTotalAge.years() != years) {
			years = newTotalAge.years();
			birthdays[years] = today.format();
		}
	}

	console.log(birthdays);


	birthdaysElement = document.getElementById('birthdays');
	birthdaysElement.innerHTML = '';

	for (age in birthdays) {
		date = birthdays[age];

		//console.log(date);

		text = '<p><strong>' + age + ':</strong> ' + moment(date).format('Do MMMM YYYY') + '</p>';
		birthdaysElement.innerHTML += text;
	}


}