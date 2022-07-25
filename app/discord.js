'use strict'
const discordClient = require('discord-rich-presence')('1000949935878967306'); 

let connected = false;
discordClient.on('error', err => {
  console.log(`Error: ${err}`);
});
discordClient.on("connected", () => {
  connected = true;
});

module.exports = function discord(window, soundcloud) {
  soundcloud.on('play-new-track', ({ title, subtitle, artworkURL }) => {
    if (!connected)
      return;

      discordClient.updatePresence({
        state: `by ${subtitle}`,
      details: `${title}`,
      largeImageKey: 'soundcleod',
      smallImageKey: 'none',
      instance: false
    });
  });
  soundcloud.on('play', ({ title, subtitle, artworkURL }) => {
    if (!connected)
      return;
    let displayTitle = `${title} by ${subtitle}`
    discordClient.updatePresence({
        state: `by ${subtitle}`,
      details: `${title}`,
      largeImageKey: 'soundcleod',
      smallImageKey: 'none',
      instance: false
    });
  });
  soundcloud.on('pause', () => {
    if (!connected)
      return;
     discordClient.updatePresence({
      state: "       ",
      details: "       ",
      largeImageKey: 'soundcleod',
      smallImageKey: 'none',
      instance: false
    });
  });
};