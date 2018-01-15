/*global getAccessToken*/

function notifyUser(response) {
  browser.browserAction.setBadgeText({text: `${response.threadsTotal}`});
}

function logError(error) {
  console.error(`Error: ${error}`);
}

/**
When the button's clicked:
- get an access token using the identity API
- use it to get the user's info
- show a notification containing some of it
*/
browser.browserAction.onClicked.addListener(() => {
  getAccessToken()
    .then(getLabelInfo)
    .then(notifyUser)
    .catch(logError);
});
