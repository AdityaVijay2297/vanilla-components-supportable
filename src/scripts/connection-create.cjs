const apiKey = '6cbff4e9-0691-43ce-99ce-11ad183a613d';
const connectionName = 'UAT-DOBIS'; 

const BASE_URL = 'https://api.us.embeddable.com'; // US

/**
 * see db-specific examples @ https://trevorio.notion.site/Connections-API-ff4af10f7eaf4288b6952fde04e6e933
 */
const dbType = 'mongobi'; // or bigquery, etc.
const credentials = {
    database: 'sup_uat_cmp_631027e01a27fdde925df028',
    host: 'supp-uat-biconnector.pfmm0.mongodb.net',
    user: 'application_user',
    password: '0agOMsyJVVgl1bIX',
    port: 27015, // standard MongoDB port (optional for SRV)
    ssl: { "enabled": true },
}

async function run() {
    const resp = await fetch(`${BASE_URL}/api/v1/connections`, {
        method: 'POST', // POST = CREATE
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}` /* keep your API Key secure */
        },
        body: JSON.stringify({
    		name: `${connectionName}`,
    		type: dbType, 
    		credentials: credentials
        })
    });

    console.log(`${resp.status} ${resp.statusText}`);
    const json = await resp.json();
    console.log(json);
}

run();







