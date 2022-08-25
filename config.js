module.exports = {
    app: {
        token: 'OTUyNDUyNzY3MzY3MTY4MDMx.Gpi5t6.P54-qzMEr1cXHs8RuvgemUj6d6nYmFIFFN7BAU',
        playing: 'music',
        global: false,
        guild: '906882553468813352'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
