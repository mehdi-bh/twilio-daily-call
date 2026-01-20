const twilio = require('twilio');

export default async function handler(req, res) {
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  
  try {
    const call = await client.calls.create({
      to: process.env.TWILIO_TO_NUMBER,
      from: process.env.TWILIO_FROM_NUMBER,
      twiml: '<Response><Pause length="3"/><Hangup/></Response>'
    });
    res.status(200).json({ success: true, callSid: call.sid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
