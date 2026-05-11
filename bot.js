const TelegramBot = require('node-telegram-bot-api')

const token = '8434994038:AAH2TN2Y5Y1XStPTZxHsLwMWE3PMVRQnESs'

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg) => {

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎮 REGISTER ACCOUNT',
            url: 'https://cm8ong.com/r/akumiskin'
          }
        ]
      ]
    }
  }

  bot.sendMessage(
    msg.chat.id,
    'WELCOME TO CM8 MALAYSIA',
    options
  )

})