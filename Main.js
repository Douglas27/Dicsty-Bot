const { ShardingManager } = require('discord.js');
const { token, shard } = require('./config.json')
const manager = new ShardingManager('./src/DicstyClient.js', { token: token, totalShards: shard, });


manager.on('message', (shard, message) => {
    console.info(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
});

manager.on('shardCreate', shard => {
    console.info(`[SHARD] Iniciando Shard ${shard.id}`)
});
manager.spawn();

process.on('SIGINT', () => {
    console.info('[INFO] Dicsty foi dormir');
    process.exit(1)
});

process.on('uncaughtException', stderr => {
    console.error('[INFO] Um erro inesperado e GRAVE ocorreu!\n', stderr);
    process.exit(1);

});

process.on('unhandledRejection', stderr => {
    console.error('[INFO] Um erro inesperado ocorreu!\n', stderr);
});