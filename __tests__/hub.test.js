'use strict';

const logEvent = require('../Hub/log-event.js');

describe('testing hub server handler', () => {
	console.log = jest.fn();

	it('should log a mock event and payload', () => {
		let eventHandler = logEvent('test');
		let payload = {
			store: 'toys r us',
			orderID: 'fakeorderid1937502',
			customer: 'Suzy Q',
			address: '123 Main St',
		}
		eventHandler(payload);
		console.log(payload);
		expect(console.log).toHaveBeenCalled();
	});
});
