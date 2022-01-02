// Creates controller
const dateController = {};

// Controller to return current date
dateController.get = (req, res) => {
	try {
		// Gets current date
		const currentDate = new Date();

		// Returns current date
		return res.status(200).send({
			date: currentDate,
		})
	} catch (err) {
		// Handles server error, sends error message
		return res.status(500).send(err.message);
	}
};

// Exports controller
module.exports = dateController;
