'use strict';

const parcel = require('./events.js');
const logEvent = require('./log-event.js');

//// demo code ////
parcel.on('pickup', logEvent('pickup'));
parcel.on('in transit', logEvent('in-transit'));
parcel.on('delivered', logEvent('delivered'));

require('../Driver/driver.js');
require('../Vendor/vendor.js');



//// ^^^^ demo code ^^^^ ////


// messenger.on('received', (payload) => {
// 	console.log('Confirmed receipt by:', payload);
// });

// messenger.emit('message', {
// 	id: messageId,
// 	text: input,
// });
