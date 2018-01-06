module.exports = function (param, clientArg, args, sounds) {
    try {
        if (param.message.member.getVoiceChannel() != null) {
            param.message.member.getVoiceChannel().join(false, false).then(voice => {
                voice.play(sounds.resolveSound("Pyro_autodejectedtie01.wav"));
                voice.on("end", () => {
                    console.log("Sucessfully played Pyro_autodejectedtie01.wav");
                    voice.disconnect()
                });


            })
        }
        param.message.channel.sendMessage("*mmph*");
    } catch (err) {
        return err;
    }
}
module.exports.isCmd = true