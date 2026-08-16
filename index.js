const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'LungCraft.aternos.me',
  port: 57104,
  username: 'AternosBot'
});

bot.on('spawn', () => {
  console.log("Bot joined and ready!");
  
  // تكرار القفز والحركة كل 6 ثوانٍ (6000 ميللي ثانية)
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500); // يفعل القفزة لنصف ثانية ثم يوقفها
    bot.look(bot.entity.yaw + 1.5, 0); // يفر راسه شوية حتى يضمن عدم اعتباره AFK
  }, 6000);
});

bot.on('end', () => {
  console.log("Bot disconnected, reconnecting in 5 seconds...");
  setTimeout(() => process.0_exit(0), 5000); // ملاحظة: تأكد تكون process.exit(0) مثل كودك القديم
});

bot.on('error', (err) => console.log(err));
