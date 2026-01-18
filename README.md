# Twilio Daily Call

Automated daily phone call that rings and hangs up after a few seconds.

## Setup

1. Create a [Twilio account](https://www.twilio.com) and get a phone number
2. Copy your Account SID and Auth Token from the Twilio Console

### GitHub Actions (Recommended)

Add these secrets to your GitHub repo (Settings → Secrets → Actions):

- `TWILIO_ACCOUNT_SID` - Your Twilio Account SID
- `TWILIO_AUTH_TOKEN` - Your Twilio Auth Token
- `TWILIO_FROM_NUMBER` - Your Twilio phone number (e.g., +1234567890)
- `TWILIO_TO_NUMBER` - The number to call (e.g., +0987654321)

Edit `.github/workflows/daily-call.yml` to adjust the schedule (cron expression).

### Local Testing

```bash
cp .env.example .env
# Edit .env with your credentials
npm install
npm run call
```

## Schedule

Default: 7 AM UTC daily. Adjust the cron in `.github/workflows/daily-call.yml`:

```yaml
cron: '0 7 * * *'  # minute hour day month weekday
```

Examples:
- `0 8 * * 1-5` → 8 AM UTC, Monday to Friday
- `30 6 * * *` → 6:30 AM UTC daily
