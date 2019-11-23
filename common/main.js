const TelegramBot = require('node-telegram-bot-api');
const getWinner = require('./small_features');
const token = '1057147927:AAGwzeIQ2ptYKYKEH2GnUPSIQ3fx-TciOtA';
const bot = new TelegramBot(token, {polling: true});

bot.on("polling_error", (err) => console.log(err));

bot.onText(/кто прав (.+) или (.+)/, function (msg, match) {
  let messageText = getWinner(match[1], match[2], msg.from.first_name);
  bot.sendMessage(msg.chat.id, messageText);
});


