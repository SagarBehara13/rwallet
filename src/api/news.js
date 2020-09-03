import CryptoControl from 'crypto-news-api'


const Api = new CryptoControl('API_KEY_HERE')


export const getTopNews = (language = 'en') => Api.getTopNews(language)
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


export const getLatestNews = (language = 'en') => Api.getLatestNews(language)
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


export const getTopNewsByCoin = (coin, language = 'en') => Api.getTopNewsByCoin(coin, language)
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


export const getLatestNewsByCoin = (coin, language = 'en') => Api.getLatestNewsByCoin(coin, language)
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


export const getTopRedditPostsByCoin = (coin, language = 'en') => Api.getTopRedditPostsByCoin(coin, language)
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


export const getLatestRedditPostsByCoin = (coin, language = 'en') => Api.getLatestRedditPostsByCoin(coin, language)
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


export const getTopTweetsByCoin = (coin, language = 'en') => Api.getTopTweetsByCoin(coin, language)
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


export const getLatestTweetsByCoin = (coin, language = 'en') => Api.getLatestTweetsByCoin(coin, language)
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


export const getTopFeedByCoin = (coin, language = 'en') => Api.getTopFeedByCoin(coin, language)
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


export const getLatestFeedByCoin = (coin, language = 'en') => Api.getLatestFeedByCoin(coin, language)
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


export const getCoinDetails = (coin) => Api.getCoinDetails(coin)
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


