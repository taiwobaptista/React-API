  export default async function textAnalyticsRequest(endpoint) {
    const url = `https://covidnigeria.herokuapp.com/${endpoint}`;
    const response = await fetch(url, {
      "method": "GET",
      "headers": {
        // "x-rapidapi-host": "microsoft-text-analytics1.p.rapidapi.com",
        // "x-rapidapi-key": YOUR_RAPID_API_KEY_GOES_HERE,
        // "content-type": "application/json",
        // "accept": "application/json"
      },
      // "body": JSON.stringify({
      //   "documents": [{
      //     "id": "1",
      //     "language": "en",
      //     "text": text,
      //   }],
      // }),
    });
    const body = await response.json();
    return body;
  }