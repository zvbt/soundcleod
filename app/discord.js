'use strict'
const discordClient = require('discord-rich-presence')('1126275915123531887')

let connected = false
discordClient.on('error', (err) => {
  console.log(`Error: ${err}`)
})
discordClient.on('connected', () => {
  connected = true
})

module.exports = function discord(mainWindow) {
  let title = mainWindow.getTitle()

  if (title.match(' by ')) {
    const music_title = title.split(' by ').shift()
    const artist = title.split(' by ').pop()
    discordClient.updatePresence({
      state: `${music_title} by ${artist}`,
      details: `Listening`,
      largeImageKey:
        'https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/81gpstko.png',
      smallImageKey: 'none',
      instance: false,
    })
  }
  if (title.match(' in ')) {
    const music_title_pl = title.split(' in ').shift()
    const playlist = title.split(' in ').pop()
    discordClient.updatePresence({
      state: `in ${playlist}`,
      details: `Listening ${music_title_pl}`,
      largeImageKey:
        'https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/81gpstko.png',
      smallImageKey: 'none',
      instance: false,
    })
  }
  if (title.match(' on Soundcloud')) {
    discordClient.updatePresence({
      state: `          `,
      details: `Browsing`,
      largeImageKey:
        'https://r2.e-z.host/7ed0180f-b228-49a7-be1e-0183c1938777/81gpstko.png',
      smallImageKey: 'none',
      instance: false,
    })
  }
}
