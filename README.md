# Telegram Translation Bot

🤖 A Telegram bot that translates text into Persian (Farsi). Built with Node.js and TypeScript.

---

## Features

- **Text Translation**: Translates any text sent by the user into Persian (Farsi).
- **Easy to Use**: Simply send a message to the bot, and it will reply with the translated text.
- **Lightweight**: Built with Node.js and TypeScript for efficiency and scalability.

---

## How It Works

1. The user sends a message to the bot.
2. The bot detects the text and uses a translation API (e.g., Google Translate, Yandex, or any other) to translate it into Persian.
3. The bot sends the translated text back to the user.

---

## Prerequisites

Before running the bot, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) (fast, disk-space-efficient package manager)
- A Telegram bot token from [BotFather](https://core.telegram.org/bots#botfather)

---

## Setup

1.**Clone the repository**:
   ```bash
   git clone https://github.com/ME-Atish/translator-bot
   cd telegram-translation-bot
```
2.Install dependencies:
``` bash
  pnpm install
```

3.Compile TypeScript:

```bash
pnpm build
```
4.Run the bot:
  Use one of the following commands:

```bash
pnpm run dev
```
or

```bash
pnpm run start
```

## Technologies Used
- **Node.js**: Runtime environment for the bot.

- **TypeScript**: Adds type safety and improves developer experience.

- **node-telegram**-bot-api: A simple and powerful library for interacting with the Telegram Bot API.

- **Translation API**: A third-party API for translating text (e.g., Google Translate, Yandex).

## Contributing
Contributions are welcome! If you'd like to improve the bot, follow these steps:

- Fork the repository.

- Create a new branch (git checkout -b feature/your-feature).

- Commit your changes (git commit -m 'Add some feature').

- Push to the branch (git push origin feature/your-feature).

- Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

##Support
If you encounter any issues or have questions, feel free to open an issue on GitHub or contact me directly.
