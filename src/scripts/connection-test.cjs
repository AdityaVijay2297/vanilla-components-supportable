const apiKey = '6cbff4e9-0691-43ce-99ce-11ad183a613d';
const connectionName = 'my-db'; 

const BASE_URL = 'https://api.us.embeddable.com'; // US
// const BASE_URL = 'https://api.eu.embeddable.com'; // EU

async function run() {
    const resp = await fetch(`${BASE_URL}/api/v1/connections/${connectionName}/test`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}` /* keep your API Key secure */
        }
    });

    console.log(`${resp.status} ${resp.statusText}`);
    const json = await resp.json();
    console.log(json);
}

run();