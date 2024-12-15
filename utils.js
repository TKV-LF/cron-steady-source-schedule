const axios = require('axios');

const UAT_URL = 'https://uat.steadyapp.dev/rehook/api/ext/schedule/cron';
const PROD_URL = 'https://app.steadyapp.dev/rehook/api/ext/schedule/cron';

async function makeApiCalls(period) {
    try {
        // Call UAT environment
        await axios.post(UAT_URL, { period });
        console.log(`[${new Date().toISOString()}] Successfully called UAT with period: ${period}`);
        
        // Call PROD environment
        await axios.post(PROD_URL, { period });
        console.log(`[${new Date().toISOString()}] Successfully called PROD with period: ${period}`);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error making API calls for period ${period}:`, error.message);
    }
}

module.exports = { makeApiCalls };
