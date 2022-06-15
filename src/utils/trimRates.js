function trimRates(ratesData) {
  const trimmedArr = Object.entries(ratesData).map(([key, value]) => {
    const string = value.toFixed(4).toString();
    const trimmed = string.replace(/0+$/,'');
    return [key, Number(trimmed)]
  })

  return Object.fromEntries(trimmedArr);
}

export default trimRates;