// const functionHandler = (req) => {
// 	try {
// 		console.log("running function")
// 		const response = {
// 			statusCode: 200,
// 			body: "ran function"
// 		};
// 		return response;
// 	} catch (error) {
// 		console.error(error);
// 		const response = {
// 			statusCode: 500,
// 			body: 'Error: ' + error,
// 		};
// 		return response;
// 	}
// }

const myFunction = require('./myFunction').default

const convertToRequestHandler = (fn) => {
	return async (req) => {
	  const response = {
		statusCode: 200,
		body: null,
	  };
  
	  try {
		// convert the req to what the end user might expect. 
		const result = await fn(...Object.values(req.query));
		response.body = result;
	  } catch (err) {
		response.statusCode = 500;
		response.body = {
		  error: err.message,
		};
	  }
  
	  return response;
	};
  };

const functionHandler = convertToRequestHandler(myFunction) 

module.exports = { functionHandler }

