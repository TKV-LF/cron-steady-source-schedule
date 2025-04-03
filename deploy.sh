#!/bin/bash

# Change to the project directory
cd /home/thuy/cron-steady-source-schedule

# Pull the latest changes
git pull origin main

# Install dependencies if needed
npm install

# Restart the application if needed
# Uncomment and modify the following line if you need to restart your application
# pm2 restart your-app-name 