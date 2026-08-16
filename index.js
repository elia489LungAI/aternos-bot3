const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'LungCraft.aternos.me', // حط آيباد سيرفرك هنا
  username: 'AternosBot',
  version: '1.21.11' // حط إصدار سيرفرك هنا بالضبط (مثل 1.20.1 أو 1.21)
});

bot.on('spawn', () => {
  console.log("Bot joined and ready!");
  
  // حركة تلقائية كل 10 ثواني عشان ما يفصله السيرفر
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
    
    // يلف يمين شوي عشان ماينطرد بتهمة الـ AFK
    bot.look(bot.entity.yaw + 1.5, 0);
  }, 10000);
});

bot.on('end', () => {
  console.log("Bot disconnected, reconnecting in 5 seconds...");
  setTimeout(() => {
    process.exit(0);
  }, 5000);
});

bot.on('error', (err) => console.log(err));