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


setInterval(function(){
    for (var i = 0; i < notes.length; i++) {
    const curDate = new Date().getHours() + ':' + new Date().getMinutes();
    if (notes[i]['time'] === curDate) {
      bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
      notes.splice(i, 1);
    }
  }
}, 1000);

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


        let rand = getRandomArbitrary(1, 5);
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
              return `${loh3}, ty loh, a ${loh1} i ${loh2} - rovnye patsany`;
              break;
        };



*/
