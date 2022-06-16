import fetchGet from '../utils/fetchGet.js';
import trimRates from '../utils/trimRates.js';

async function getRates(base = 'USD', amount = 1) {
  const options = {
    hostname: process.env.API || 'api.exchangerate.host',
    path: `/latest?base=${base}&amount=${amount}`,
  };

  try {
    const res = await fetchGet(options);
    if (res.code === 200) return { code: res.code, data: trimRates(res.body.rates) };
    else return { code: res.code, data: `An API error has occurred. Status code: ${res.code}` };
  } catch (err) {
    return { code: 500, data: err.message };
  }
}

export default getRates;
