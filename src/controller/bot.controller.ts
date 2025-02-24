import * as TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
import { translateText } from "./api.controller"; // Import the translation function

dotenv.config();

const token: string = process.env.TELEGRAM_TOKEN || ""; // Add fallback for token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = "به ربات مترجم خوش اومدی!";
  const inlineKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "فارسی به انگلیسی", callback_data: "faToEn" }],
        [{ text: "انگلیسی به فارسی", callback_data: "enToFa" }],
      ],
    },
  };

  bot.sendMessage(chatId, message, inlineKeyboard);
});

bot.on("callback_query", async (query) => {
  const chatId = query.message?.chat.id;
  const data = query.data;

  if (!chatId) return;

  if (data === "faToEn" || data === "enToFa") {
    const fromLang = data === "faToEn" ? "fa" : "en";
    const targetLang = data === "faToEn" ? "en" : "fa";

    await bot.sendMessage(chatId, "لطفا متن خود را وارد کنید:");

    // Listen for the user's text input
    bot.once("message", async (msg) => {
      const text = msg.text;

      if (!text) {
        await bot.sendMessage(chatId, "متن وارد شده نامعتبر است.");
        return;
      }

      await bot.sendMessage(chatId, "در حال پردازش... ⚙️");

      try {
        // Call the translation function
        const translatedText = await translateText(fromLang, targetLang, text);
        await bot.sendMessage(chatId, `ترجمه: ${translatedText}`);
      } catch (error) {
        await bot.sendMessage(chatId, "خطا در ترجمه متن. لطفا دوباره امتحان کنید.");
        console.error(error);
      }
    });
  }
});