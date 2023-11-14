"use strict";

// src/server.ts
var import_discord = require("discord.js");
var import_config = require("dotenv/config");
var client = new import_discord.Client({ intents: [import_discord.GatewayIntentBits.Guilds] });
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand())
    return;
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
  if (interaction.commandName === "teste") {
    await interaction.reply("Teste!!!");
  }
});
client.login(process.env.TOKEN);
