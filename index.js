var TelegramBot = require('node-telegram-bot-api');

var token = '1057147927:AAGwzeIQ2ptYKYKEH2GnUPSIQ3fx-TciOtA';
var bot = new TelegramBot(token, {polling: true});

var notes = [];

bot.on("polling_error", (err) => console.log(err));

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

bot.onText(/напомни (.+) в (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    notes.push({ 'uid': userId, 'time': time, 'text': text });

    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
});


setInterval(function(){
    for (var i = 0; i < notes.length; i++) {
    const curDate = new Date().getHours() + ':' + new Date().getMinutes();
    if (notes[i]['time'] === curDate) {
      bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
      notes.splice(i, 1);
    }
  }
}, 1000);

let getWinner = (loh1, loh2) => {

  let rand = getRandomArbitrary(1, 4);
  console.log(rand);

  switch(rand){
    case 1:
        return `${loh1} voobshe krasave, a ${loh2} chertila pozorny`;
        break;
    case 2:
        return `da ${loh2}, na tvoyom meste ya by nabil yemu yebalnik. ${loh1}, ty ne prav`;
        break;
    case 3:
        return mesText = `${loh1} i ${loh2}, vy oba yebanutye`;
        break;
    case 4:
        return `${msg.from.first_name}, ty loh, a ${loh1} i ${loh2} - rovnye patsany`;
        break;
  };
};

bot.onText(/кто прав (.+) или (.+)/, function (msg, match) {
  let userId = msg.from.id;
  let loh1 = match[1];
  let loh2 = match[2];
  let messageText = getWinner(match[1], match[2]);
  console.log(messageText, match[1], match[2]);
  bot.sendMessage(userId, messageText);
});

bot.onText(/\/love/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes, you are the bot of my life ❤'],
        ['No, sorry there is another one...']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
});

/*
bot.onText("/", function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['/anek'],
        ['/morskoy boy']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
});
*/