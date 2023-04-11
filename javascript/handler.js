const functionHandler = (req) => {
	try {
		console.log("running function")
		const response = {
			statusCode: 200,
			body: "ran function"
		};
		return response;
	} catch (error) {
		console.error(error);
		const response = {
			statusCode: 500,
			body: 'Error: ' + error,
		};
		return response;
	}
}

module.exports = { functionHandler }