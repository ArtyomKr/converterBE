import https from 'https';

function fetchGet(options) {
  options.method = 'GET';
  options.port = 443;

  return new Promise((resolve, reject) => {
    let response = '';

    const req = https.get(options, (res) => {
      res.on('data', chunk => {
        response += chunk;
      });
      res.on('end', () => resolve({
        body: JSON.parse(response),
        code: res.statusCode
      }));
    })

    req.on('error', err => reject(err));
    req.end();
  })
}

export default fetchGet;