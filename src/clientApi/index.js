const BASEURL = 'https://api.coingecko.com/api/v3'


export const getListings = async () => {
  const pathParam = 'coins/list'

  return fetch(`${BASEURL}/${pathParam}`)
    .then(
      response => {
        if (response.ok) return response
        else {
          const error = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .catch(error => error);
}


export const getTopListingsMarketData = async (convertCurrency = 'usd') => {
  const pathParam = 'coins/markets'
  const queryParam =
    `vs_currency=${convertCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`

  return fetch(`${BASEURL}/${pathParam}?${queryParam}`)
    .then(
      response => {
        if (response.ok) return response
        else {
          const error = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .catch(error => error);
}
