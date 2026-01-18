const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;
const toNumber = process.env.TWILIO_TO_NUMBER;

const client = twilio(accountSid, authToken);

client.calls.create({
  to: toNumber,
  from: fromNumber,
  twiml: '<Response><Pause length="3"/><Hangup/></Response>'
})
.then(call => console.log('Call initiated:', call.sid))
.catch(err => console.error('Error:', err.message));
