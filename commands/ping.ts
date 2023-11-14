import { REST, Routes } from 'discord.js';
import 'dotenv/config'
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'teste',
    description: 'isso é um teste',
  },
];
const {CLIENT_ID, TOKEN, GUILD_ID} = process.env
const rest = new REST({ version: '10' }).setToken(TOKEN!);

(async ()=>{
  try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID!), { body: commands }).then(()=>{
    console.log("comando enviado com exito")
  });

  console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
  console.error(error);
  }
})()