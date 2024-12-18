const apiKey = '6cbff4e9-0691-43ce-99ce-11ad183a613d';
const connectionName = 'dev-db'; 

const BASE_URL = 'https://api.us.embeddable.com'; // US
// const BASE_URL = 'https://api.eu.embeddable.com'; // EU

/**
 * see db-specific examples @ https://trevorio.notion.site/Connections-API-ff4af10f7eaf4288b6952fde04e6e933
 */
const dbType = 'mongobi'; // or bigquery, etc.
const credentials = {
    database: 'sup-dev_cmp_63073a205938a244257e6c31',
    host: 'supportable-nonprod-biconnector.pfmm0.mongodb.net',
    user: 'application_user',
    password: '0agOMsyJVVgl1bIX',
    port: 27015, // standard MongoDB port (optional for SRV)
    ssl: { "enabled": true },
}

async function run() {
    const resp = await fetch(`${BASE_URL}/api/v1/connections/${connectionName}`, {
        method: 'PUT', // PUT = UPDATE
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}` /* keep your API Key secure */
        },
        body: JSON.stringify({
    		type: dbType, 
    		credentials: credentials
        })
    });

    console.log(`${resp.status} ${resp.statusText}`);
    const json = await resp.json();
    console.log(json);
}

run();