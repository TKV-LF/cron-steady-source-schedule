# Cron Scheduler for API Calls

This project contains Node.js scripts to make periodic API calls to UAT and PROD environments.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up crontab by running:
```bash
crontab -e
```

3. Add the following lines to your crontab (replace /path/to with your actual path):
```bash
# Run every minute
* * * * * cd /home/thuy/cron-steady-source-schedule && /usr/bin/node 1m.js >> /home/thuy/cron-steady-source-schedule/logs/1m.log 2>&1

# Run every 15 minutes
*/15 * * * * cd /home/thuy/cron-steady-source-schedule && /usr/bin/node 15m.js >> /home/thuy/cron-steady-source-schedule/logs/15m.log 2>&1

# Run every 30 minutes
*/30 * * * * cd /home/thuy/cron-steady-source-schedule && /usr/bin/node 30m.js >> /home/thuy/cron-steady-source-schedule/logs/30m.log 2>&1

# Run every hour
0 * * * * cd /home/thuy/cron-steady-source-schedule && /usr/bin/node 1h.js >> /home/thuy/cron-steady-source-schedule/logs/1h.log 2>&1
```

4. Create a logs directory:
```bash
mkdir logs
```

## Structure
- `utils.js`: Contains the shared API calling functionality
- `1m.js`: Script for 1-minute interval
- `15m.js`: Script for 15-minute interval
- `30m.js`: Script for 30-minute interval
- `1h.js`: Script for 1-hour interval

## Logs
Each script writes its logs to a separate file in the logs directory. Check these files for execution history and any errors.
