"use strict";
const { Event } = require("sosamba");
class GuildJoinEvent extends Event {
    constructor(...args) {
        super(...args, {
            name: "guildCreate"
        });
    }

    async run(guild) {
        if (this.sosamba.listBotColls().includes(guild))
            guild.leave();
        await this.sosamba.IPC.send("sendGuilds", {
            id: SHARD_ID,
            guilds: this.sosamba.guilds.size
        });
    }
}
module.exports = GuildJoinEvent;