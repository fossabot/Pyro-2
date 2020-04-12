const Command = require("../lib/VoiceBasedCommand");

class HeadLeftCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "headleft"
        });
    }

    async run(ctx) {
        await Promise.all([
            this.playSound(ctx, "Pyro_headleft01.wav"),
            ctx.send("*MMPH MMPH!*")
        ]);
    }
}

module.exports = HeadLeftCommand;