const apiKey = '6cbff4e9-0691-43ce-99ce-11ad183a613d';


async function run() {
    // for security reasons, this must *never* be called from your client-side
    const response = await fetch('https://api.us.embeddable.com/api/v1/environments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}` /* keep your API Key secure */,
      },
      body: JSON.stringify({
        name: 'Customer1UAT',
        datasources: [{ data_source: 'default', connection: 'customer1-uat' }
        ],
      }),
    });
  
    console.log(`${response.status} ${response.statusText}`);
  }
  
  run();
  


