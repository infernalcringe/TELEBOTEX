const getWinner = require('./features/who_is_wright');
const TelegramBot = require('node-telegram-bot-api');
const token = 'токен';
const bot = new TelegramBot(token, {polling: true});

getWinner(bot);