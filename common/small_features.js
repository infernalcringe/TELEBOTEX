
    let getWinner = (loh1, loh2, loh3) => {

        let opts = [`${loh1} - кросаво, a ${loh2} - чертила позорный`,
        `${loh2}, на твоём месте я бы набил ему ебальник. ${loh1}, ты - не прав`,
        `${loh1} и ${loh2}, вы оба ебанутые`,
        `${loh3}, лох здесь ты, a ${loh1} и ${loh2} - ровные пацаны`];

        return opts[Math.floor(Math.random()*opts.length)];
    };
    
module.exports = getWinner;