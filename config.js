module.exports = {
    app: {
        token: 'OTUyNDUyNzY3MzY3MTY4MDMx.Yi2Oww.qbv3qUwQDIa70DEq8GSBSkx0Xys',
        playing: 'music',
        global: true,
        guild: 'XXX'
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
