import * as SecureStore from 'expo-secure-store';

const ENDPOINT = 'http://api.kvikmyndir.is/authenticate';

export const getNewToken = async () => {
  let timestamp;
  try {
    timestamp = await SecureStore.getItemAsync('token_timestamp');
    timestamp = Number(timestamp);
  } catch (e) {
    console.log(e);
  }
  function isExpired(tokenTimestamp) { return tokenTimestamp + 80000 <= new Date() / 1000; }

  // Check if timstamp has not been set or is expired
  if (timestamp === null || timestamp === undefined || isExpired(timestamp)) {
    const timestampNow = new Date() / 1000;
    console.log(timestampNow)
    await SecureStore.setItemAsync('token_timestamp', timestampNow.toString());

    // Grab new timestamp
    const rawResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'arnarkj', password: 'dr.cinema' })
    });
    const content = await rawResponse.json();
    await SecureStore.setItemAsync('secure_token', content.token);
    return content.token;
  }
  // Return existing valid token
  const token = await SecureStore.getItemAsync('secure_token');
  return token;
};
