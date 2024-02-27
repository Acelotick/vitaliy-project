//------ import
const { createInterface } = require('readline');

//------ constants
const commands = {}, closecmd = [];
const texts = { command: 'Прости, команда %cmd, не существует.', command_log: true, error: 'Сорри, неизвестная ошибка, попробуй связаться с создателем', error_log: true };

//------ interface
let rl = createInterface({ input: process.stdin, output: process.stdout, prompt: '' });
rl.on('line', (a) => imitCommand(a));
rl.on('close', () => imitClose());

//------ application available functions
const addCommand = (cmd, lowercase, func) => commands[cmd] = { func, lower: lowercase };
const addCloseCommand = (func) => closecmd.push(func);
const handler = (args, raw, defraw) => (!commands[args[0]] && texts.command_log && console.log(texts.command.replace('%cmd', args[0]))) || (commands[args[0]]?.func(args, raw, defraw));
const imitCommand = (stroke) => stroke.trim() !== '' && handler(stroke.trim().split(' '), stroke.trim(), stroke);
const imitClose = () => closecmd.forEach((a) => a());
const getRl = () => rl;
const setRl = (Rl) => rl = Rl;
const getCommands = () => commands;
const eraseCommands = () => commands = {};
const eraseCloseCommands = () => closecmd = [];

//------ export all function
module.exports = { addCommand, addCloseCommand, texts, handler, imitCommand, imitClose, getRl, setRl, getCommands, eraseCommands, eraseCloseCommands };

//------ start all scripts
require('./script')
