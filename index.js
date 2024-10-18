const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const { env } = require('./utils/env');


const app = express();

const bot = new TelegramBot(env.BOT_API, { polling: true });

bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  newMembers.forEach((newMember) => {
    const username = newMember.username ? `@${newMember.username}` : newMember.first_name;
    const imageUrl = env.WELCOME_IMAGE_URL; 

    const welcomeMessage = `
Hello ${username}, welcome to **PiApes Group**! 🎉

${env.WELCOME_MESSAGE1}

${env.WELCOME_MESSAGE2}

${env.WELCOME_MESSAGE3}


    `;

    bot.sendPhoto(chatId, imageUrl, { caption: welcomeMessage, parse_mode: 'Markdown' })
      .then((sentMessage) => {
        setTimeout(() => {
          bot.deleteMessage(chatId, sentMessage.message_id)
            .catch((error) => {
              console.error('Failed to delete message:', error);
            });
        }, env.DELETE_MESSAGE_TIMEOUT);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
      });
  });
});
app.get('/', (req, res) => {
  res.send('PiApes Helper Bot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
