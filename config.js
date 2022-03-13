module.exports = {
    app: {
        px: '?p',
        token: 'OTUyNDUyNzY3MzY3MTY4MDMx.Yi2Oww.q6IlJ74FynHsg2GU24blrbx7SFw',
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
