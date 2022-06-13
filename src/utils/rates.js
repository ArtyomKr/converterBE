import https from 'https';

const options = {
  hostname: 'api.exchanrate.host',
  port: 443,
  path: '/latest?base=USD',
  method: 'GET',
};

let getRates = new Promise((resolve, reject) => {
  let response = ''

  const req = https.get(options, (res) => {
    res.on('data', chunk => {
      response += chunk;
    });
    res.on('end', () => resolve(response));
  })

  req.on('error', err => reject(err));
  req.end();
})
  

getRates.then(res => console.log(res)).catch(err => console.log(err));
