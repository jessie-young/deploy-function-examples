const { RestRequestHandler, Request: CakeworkRequest } = require('@cakework/adapters/lib/restRequestHandler');


async function sayHello(yourName) {

  try {
    return 'hello ' + yourName + ' world!';
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
    default: sayHello,
  }