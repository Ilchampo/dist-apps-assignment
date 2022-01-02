// Creates controller
const ageController = {};

// Controller to verify age
ageController.verify = (req, res) => {
	try {
		// Gets current year and birth year from params
		const currentYear = new Date().getFullYear();
		const ageString = req.params.age;
		const birthYear = ageString.split('-')[2];

		// Returns json with information about age
		return res.status(200).send({
			overAge: currentYear - birthYear >= 18,
			currentAge: currentYear - birthYear,
		});
	} catch (err) {
		// Handles server error, sends error message
		return res.status(500).send(err.message);
	}
};

// Exports controller
module.exports = ageController;
