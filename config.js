module.exports = {
    app: {
        px: '.',
        token: 'OTUyNDUyNzY3MzY3MTY4MDMx.Yi2Oww.qbv3qUwQDIa70DEq8GSBSkx0Xys',
        playing: 'music'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
